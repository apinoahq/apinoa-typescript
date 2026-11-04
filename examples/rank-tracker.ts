/**
 * Rank tracker: where does a site rank for a query, on each search engine? Appends to ranks.csv.
 *
 *   npx tsx rank-tracker.ts "wool socks" example.com
 *   npx tsx rank-tracker.ts "wool socks" example.com --engines google,bing,naver --country us --pages 2
 *
 * One page is one call. Each engine returns the same results-page schema, so the same code reads them all.
 */
import { appendFileSync, existsSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { ApinoaClient, type Apinoa } from "@apinoa/sdk";

const apinoa = new ApinoaClient(); // reads APINOA_API_KEY
const FILE = "ranks.csv";

// Each engine lists the countries it takes (an ISO code, upper case); Naver searches Korea.
const search = {
  google: (q: string, country?: string, cursor?: string) => apinoa.google.search({ q, country: country as Apinoa.SearchGoogleRequestCountry, cursor }),
  bing: (q: string, country?: string, cursor?: string) => apinoa.bing.search({ q, country: country as Apinoa.SearchBingRequestCountry, cursor }),
  duckduckgo: (q: string, country?: string, cursor?: string) => apinoa.duckduckgo.search({ q, country: country as Apinoa.SearchDuckduckgoRequestCountry, cursor }),
  naver: (q: string, _country?: string, cursor?: string) => apinoa.naver.search({ q, cursor }),
};
type Engine = keyof typeof search;

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { engines: { type: "string", default: "google" }, country: { type: "string" }, pages: { type: "string", default: "1" } },
});
const [query, domain] = positionals;
if (!query || !domain) {
  console.error(`usage: npx tsx rank-tracker.ts "<query>" <domain> [--engines ${Object.keys(search).join(",")}] [--country us] [--pages 1]`);
  process.exit(1);
}

/** True when the result's host is the domain or one of its subdomains. */
const isOurs = (url: string) => {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return host === domain || host.endsWith(`.${domain}`);
};

if (!existsSync(FILE)) writeFileSync(FILE, "checked_at,engine,query,domain,rank,url\n");

for (const engine of values.engines!.split(",") as Engine[]) {
  if (!(engine in search)) {
    console.error(`unknown engine "${engine}"`);
    continue;
  }
  let found: { rank: number; url: string } | undefined;
  let cursor: string | undefined;
  let checked = 0;
  try {
    for (let page = 0; page < Number(values.pages) && !found; page++) {
      const { data } = await search[engine](query, values.country?.toUpperCase(), cursor);
      // Organic results carry their position among organic results; other blocks (ads, maps, videos) are skipped.
      for (const item of data.items) {
        if (item.type === "organic") checked++;
        if (item.type === "organic" && isOurs(item.url)) {
          found = { rank: item.position, url: item.url };
          break;
        }
      }
      cursor = data.cursor;
      if (!cursor) break;
    }
  } catch (err) {
    console.error(`${engine}: ${(err as Error).message}`); // failed calls are not billed
    continue;
  }
  console.log(`${engine}: ${found ? `#${found.rank} ${found.url}` : `not in the first ${checked} organic results`}`);
  appendFileSync(FILE, [new Date().toISOString(), engine, JSON.stringify(query), domain, found?.rank ?? "", found?.url ?? ""].join(",") + "\n");
}
