# apinoa

The official TypeScript and JavaScript SDK for [apinoa](https://apinoa.com): product data from Amazon,
Walmart, Shopify, TikTok Shop and AliExpress, social data from TikTok, YouTube, Instagram, Threads, X,
Reddit and LinkedIn, and image translation, through one API.

```sh
npm install apinoa
```

Requires Node.js 20 or later (or any runtime with `fetch`: Bun, Deno, Cloudflare Workers).

## Usage

Create a key under **Dashboard > API keys** at [apinoa.com](https://apinoa.com), then:

```ts
import { ApinoaClient } from "apinoa";

const apinoa = new ApinoaClient({ apiKey: process.env.APINOA_API_KEY });

const { data } = await apinoa.amazon.search({ query: "wool socks", priceMax: 30 });
for (const item of data.items) console.log(item.title, item.price?.amount);
```

`apiKey` defaults to the `APINOA_API_KEY` environment variable. Keep the key on your server: it spends
your balance.

Every call is `apinoa.<platform>.<operation>(params)`, spelled the way the URL is: `/v1/tiktokshop/product`
is `apinoa.tiktokshop.product(...)`. Every answer is `{ success, data, requestId }`.

### Marketplaces

Every marketplace answers in one commerce schema: a `Product` from Amazon reads like one from Shopify.

```ts
const product = await apinoa.walmart.product({ id: "5089499913" });
const reviews = await apinoa.shopify.reviews({ id: "allbirds.com/products/mens-tree-runners" });
const tree = await apinoa.amazon.categories({});
```

### Social platforms

Every platform answers in one social schema (`Account`, `Post`, `Comment`, `Group`), with what only one
platform has under `ext`.

```ts
const creator = await apinoa.tiktok.profile({ username: "khaby.lame" });
const page = await apinoa.reddit.posts({ community: "typescript" });
const next = await apinoa.reddit.posts({ cursor: page.data.cursor }); // the next page: the cursor alone
```

### Image translation

```ts
import { readFile, writeFile } from "node:fs/promises";

const image = await apinoa.imageTranslate.translate(await readFile("product.jpg"), {
  source_language: "zh-CN",
  target_language: "ko",
});
await writeFile("translated.jpg", Buffer.from(await image.arrayBuffer()));
```

With `render: false` the body is JSON (the cleaned image and every text region): read it with
`JSON.parse(await image.text())`.

## Errors

A failed call throws a subclass of `ApinoaError` named after its status (`BadRequestError`,
`PaymentRequiredError`, `NotFoundError`, `TooManyRequestsError`, …). `err.body.error.code` is the stable
code to branch on; every code is listed at [apinoa.com/docs/errors](https://apinoa.com/docs/errors). A
failed call is not billed.

```ts
import { Apinoa, ApinoaError } from "apinoa";

try {
  await apinoa.amazon.product({ id: "B000000000" });
} catch (err) {
  if (err instanceof Apinoa.NotFoundError) console.log("no such product");
  else if (err instanceof Apinoa.PaymentRequiredError) console.log("top up your balance");
  else throw err;
}
```

## Retries and timeouts

`429`, `408` and `5xx` answers are retried twice with exponential backoff, honouring `Retry-After`.
Change it with `maxRetries`, per client or per call. The default timeout is 300 seconds, because image
translation under load can take minutes; set `timeoutInSeconds` lower for the data calls if you prefer.

```ts
const apinoa = new ApinoaClient({ maxRetries: 4, timeoutInSeconds: 60 });
await apinoa.tiktok.posts({ username: "nasa" }, { maxRetries: 0, abortSignal: AbortSignal.timeout(10_000) });
```

## Reference

Every method and parameter: [reference.md](./reference.md). The API itself:
[apinoa.com/docs](https://apinoa.com/docs). The OpenAPI document this SDK is generated from:
[apinoa.com/openapi.json](https://apinoa.com/openapi.json).

## License

MIT
