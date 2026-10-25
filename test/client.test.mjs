// The SDK against a local fake of the API: what goes on the wire, and what comes back.
// Runs on the built package (npm test builds first), the way a customer imports it.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { createRequire } from "node:module";

import { ApinoaClient, Apinoa } from "../dist/esm/index.js";

let server;
let baseUrl;
const seen = [];
let respond = () => [200, { success: true, data: {} }];

before(async () => {
  server = createServer(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const call = { method: req.method, url: new URL(req.url, "http://x"), headers: req.headers, body: Buffer.concat(chunks) };
    seen.push(call);
    const [status, body, headers = {}] = respond(call, seen.length);
    const bytes = Buffer.isBuffer(body) ? body : Buffer.from(JSON.stringify(body));
    res.writeHead(status, { "content-type": Buffer.isBuffer(body) ? "image/jpeg" : "application/json", ...headers });
    res.end(bytes);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

const fresh = (impl) => {
  seen.length = 0;
  respond = impl;
};
const client = (opts = {}) => new ApinoaClient({ apiKey: "ak_test", baseUrl, maxRetries: 2, ...opts });

test("a GET operation sends the key and the query, lists comma-joined, and returns the envelope", async () => {
  fresh(() => [200, { success: true, data: { marketplace: "amazon", items: [{ id: "B0", title: "Socks", extra: 1 }] }, requestId: "r1" }]);
  const res = await client().amazon.search({ query: "wool socks", brands: ["Nike", "Adidas"], priceMin: 5 });
  assert.equal(seen.length, 1);
  const [call] = seen;
  assert.equal(call.method, "GET");
  assert.equal(call.url.pathname, "/v1/amazon/search");
  assert.equal(call.url.searchParams.get("query"), "wool socks");
  assert.equal(call.url.searchParams.get("brands"), "Nike,Adidas");
  assert.equal(call.url.searchParams.get("priceMin"), "5");
  assert.equal(call.headers["x-api-key"], "ak_test");
  assert.equal(res.success, true);
  assert.equal(res.requestId, "r1");
  assert.equal(res.data.items[0].title, "Socks");
  assert.equal(res.data.items[0].extra, 1, "fields beyond the declared type are kept");
});

test("the key falls back to APINOA_API_KEY", async () => {
  fresh(() => [200, { success: true, data: { platform: "reddit", username: "spez" } }]);
  process.env.APINOA_API_KEY = "ak_from_env";
  try {
    await new ApinoaClient({ baseUrl }).reddit.profile({ username: "spez" });
  } finally {
    delete process.env.APINOA_API_KEY;
  }
  assert.equal(seen[0].headers["x-api-key"], "ak_from_env");
});

test("image-search is a POST with the image in a JSON body", async () => {
  fresh(() => [200, { success: true, data: { items: [] } }]);
  await client().amazon.imageSearch({ image: { contentType: "image/jpeg", data: "AAAA" } });
  assert.equal(seen[0].method, "POST");
  assert.deepEqual(JSON.parse(seen[0].body.toString()), { image: { contentType: "image/jpeg", data: "AAAA" } });
});

test("a 400 is thrown at once with the API's code, and not retried", async () => {
  fresh(() => [400, { success: false, error: { code: "INVALID_PARAMS", message: "query: Required" }, requestId: "r2" }]);
  await assert.rejects(client().walmart.search({ query: "" }), (e) => {
    assert.ok(e instanceof Apinoa.BadRequestError);
    assert.equal(e.statusCode, 400);
    assert.equal(e.body.error.code, "INVALID_PARAMS");
    return true;
  });
  assert.equal(seen.length, 1);
});

test("a 402 (out of credit) is thrown and not retried", async () => {
  fresh(() => [402, { success: false, error: { code: "INSUFFICIENT_BALANCE", message: "top up" } }]);
  await assert.rejects(client().walmart.search({ query: "socks" }), (e) => e instanceof Apinoa.PaymentRequiredError && e.body.error.code === "INSUFFICIENT_BALANCE");
  assert.equal(seen.length, 1);
});

test("a 429 is retried after its Retry-After, then succeeds", async () => {
  fresh((_call, n) =>
    n === 1 ? [429, { success: false, error: { code: "CAPACITY_SATURATED", message: "busy" } }, { "retry-after": "0" }] : [200, { success: true, data: { items: [] } }],
  );
  const res = await client().walmart.search({ query: "socks" });
  assert.equal(seen.length, 2);
  assert.deepEqual(res.data.items, []);
});

test("a 502 that persists gives up after maxRetries and throws", async () => {
  fresh(() => [502, { success: false, error: { code: "UPSTREAM_TIMEOUT", message: "slow" } }]);
  await assert.rejects(client({ maxRetries: 1 }).tiktok.posts({ username: "x" }), (e) => e instanceof Apinoa.BadGatewayError);
  assert.equal(seen.length, 2);
});

test("image translation uploads raw bytes with the languages in the query, and returns the image", async () => {
  const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3]);
  fresh(() => [200, Buffer.from([0xff, 0xd8, 9, 9]), { "x-apinoa-regions-count": "2" }]);
  const out = await client().imageTranslate.translate(jpeg, { source_language: "zh-CN", target_language: "ko" }).withRawResponse();
  const [call] = seen;
  assert.equal(call.method, "POST");
  assert.equal(call.url.pathname, "/v1/image-translate/translate");
  assert.equal(call.url.searchParams.get("source_language"), "zh-CN");
  assert.equal(call.url.searchParams.get("target_language"), "ko");
  assert.deepEqual([...call.body], [...jpeg]);
  assert.deepEqual([...new Uint8Array(await out.data.arrayBuffer())], [0xff, 0xd8, 9, 9]);
  assert.equal(out.rawResponse.headers.get("x-apinoa-regions-count"), "2");
});

test("the catalog is listed without a key", async () => {
  fresh(() => [200, { success: true, data: { marketplaces: [{ id: "walmart", kind: "marketplace", operations: ["search"] }] } }]);
  const res = await client().marketplaces.list();
  assert.equal(res.data.marketplaces[0].id, "walmart");
});

test("the CommonJS build loads and exposes the same client", () => {
  const require = createRequire(import.meta.url);
  const cjs = require("../dist/cjs/index.js");
  assert.equal(typeof cjs.ApinoaClient, "function");
});
