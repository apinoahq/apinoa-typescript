/**
 * Price tracker: read each product's price now, keep the history in prices.csv, and say what changed
 * since the last run.
 *
 *   npx tsx price-tracker.ts walmart 18256507800 shopify allbirds.com/products/mens-tree-runners
 *
 * Arguments come in pairs: a marketplace (amazon, walmart, shopify, aliexpress, tiktokshop) and a product
 * id or URL. Run it on a schedule (cron, a CI job) to build the history.
 */
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { ApinoaClient } from "@apinoa/sdk";

const apinoa = new ApinoaClient(); // reads APINOA_API_KEY
const FILE = "prices.csv";

const product = {
  amazon: (id: string) => apinoa.amazon.product({ id }),
  walmart: (id: string) => apinoa.walmart.product({ id }),
  shopify: (id: string) => apinoa.shopify.product({ id }),
  aliexpress: (id: string) => apinoa.aliexpress.product({ id }),
  tiktokshop: (id: string) => apinoa.tiktokshop.product({ id }),
};
type Marketplace = keyof typeof product;

const args = process.argv.slice(2);
if (args.length === 0 || args.length % 2 !== 0) {
  console.error(`usage: npx tsx price-tracker.ts <marketplace> <id> [<marketplace> <id> ...]\nmarketplaces: ${Object.keys(product).join(", ")}`);
  process.exit(1);
}

/** The last price recorded for each marketplace:id, from the CSV. */
const last = new Map<string, string>();
if (existsSync(FILE)) {
  for (const line of readFileSync(FILE, "utf8").trim().split("\n").slice(1)) {
    // The title is the last column, so a comma inside it cannot shift the ones before it.
    const [, marketplace, id, price] = line.split(",");
    last.set(`${marketplace}:${id}`, price!);
  }
} else {
  writeFileSync(FILE, "checked_at,marketplace,id,price,currency,in_stock,title\n");
}

const csv = (v: unknown) => (v === undefined ? "" : `"${String(v).replaceAll('"', '""')}"`);

for (let i = 0; i < args.length; i += 2) {
  const marketplace = args[i] as Marketplace;
  const id = args[i + 1]!;
  if (!(marketplace in product)) {
    console.error(`unknown marketplace "${marketplace}"`);
    continue;
  }
  try {
    const { data } = await product[marketplace](id);
    const price = data.price?.amount;
    const before = last.get(`${marketplace}:${id}`);
    const change = before === undefined || before === "" ? "first check" : Number(before) === price ? "unchanged" : `was ${before}`;
    console.log(`${data.title}: ${price ?? "no price"} ${data.price?.currency ?? ""} (${change})`);
    appendFileSync(FILE, [new Date().toISOString(), marketplace, id, price ?? "", data.price?.currency ?? "", data.inStock ?? "", csv(data.title)].join(",") + "\n");
  } catch (err) {
    // A failed call is not billed. The error says why: a product that is gone, a bad id, no balance.
    console.error(`${marketplace} ${id}: ${(err as Error).message}`);
  }
}
