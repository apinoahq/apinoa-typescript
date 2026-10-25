// Against the real API, with a real key: APINOA_API_KEY=... npm run test:live
// Three calls, each one unit at most. Skipped without a key.
import { test } from "node:test";
import assert from "node:assert/strict";

import { ApinoaClient } from "../../dist/esm/index.js";

const key = process.env.APINOA_API_KEY;
const opts = { skip: !key && "set APINOA_API_KEY to run the live tests" };
const client = () => new ApinoaClient({ apiKey: key, ...(process.env.APINOA_BASE_URL ? { baseUrl: process.env.APINOA_BASE_URL } : {}) });

test("the catalog lists every platform", opts, async () => {
  const res = await client().marketplaces.list();
  const ids = res.data.marketplaces.map((m) => m.id);
  for (const id of ["amazon", "walmart", "reddit", "tiktok"]) assert.ok(ids.includes(id), id);
});

test("a social profile", opts, async () => {
  const res = await client().reddit.profile({ username: "spez" });
  assert.equal(res.data.platform, "reddit");
  assert.equal(res.data.handle.toLowerCase(), "spez");
});

test("a marketplace search", opts, async () => {
  const res = await client().walmart.search({ query: "wool socks" });
  assert.ok(res.data.items.length > 0);
  assert.ok(res.data.items[0].title);
});
