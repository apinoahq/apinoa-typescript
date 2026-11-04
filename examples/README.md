# Examples

Four small programs that use [`@apinoa/sdk`](https://www.npmjs.com/package/@apinoa/sdk). Copy one, change
it, run it on a schedule.

```bash
npm install
export APINOA_API_KEY=your_key   # https://apinoa.com/en/dashboard/api-keys
```

| File | What it does | Calls per run |
|---|---|---|
| [`price-tracker.ts`](./price-tracker.ts) | Reads products' prices on Amazon, Walmart, Shopify, AliExpress or TikTok Shop, keeps the history in `prices.csv` and says what changed | one per product |
| [`rank-tracker.ts`](./rank-tracker.ts) | Finds where a domain ranks for a query on Google, Bing, DuckDuckGo or Naver, and appends it to `ranks.csv` | one per engine and page |
| [`social-listening.ts`](./social-listening.ts) | Prints new Reddit, Threads or YouTube posts that mention a term, remembering what it has shown in `seen.json` | one per platform |
| [`ai-answer-monitor.ts`](./ai-answer-monitor.ts) | Asks ChatGPT, Gemini, Google AI Overviews or AI Mode a question and records whether your brand is named and which sources are cited | one per engine |

```bash
npx tsx price-tracker.ts walmart 18256507800 shopify allbirds.com/products/mens-tree-runners
npx tsx rank-tracker.ts "wool socks" example.com --engines google,bing --country US
npx tsx social-listening.ts "your brand" --platforms reddit,youtube
npx tsx ai-answer-monitor.ts "best wool socks for hiking" "Your Brand" --engines chatgpt,gemini
```

Calls are billed to your key at the [normal rates](https://apinoa.com/pricing), and a call that fails is
not billed. Every response follows one schema per family, so code written for one marketplace, engine
or platform reads the others: see the [docs](https://apinoa.com/docs).
