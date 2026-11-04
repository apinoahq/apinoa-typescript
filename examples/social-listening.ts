/**
 * Social listening: new posts that mention a term, on Reddit, Threads or YouTube. Remembers what it has
 * shown in seen.json, so each run prints only what is new.
 *
 *   npx tsx social-listening.ts "your brand"
 *   npx tsx social-listening.ts "your brand" --platforms reddit,youtube
 *
 * Every platform answers in the same social schema, so one loop reads them all.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { ApinoaClient } from "@apinoa/sdk";

const apinoa = new ApinoaClient(); // reads APINOA_API_KEY
const FILE = "seen.json";

const posts = {
  reddit: (query: string) => apinoa.reddit.posts({ query, sort: "new" }),
  threads: (query: string) => apinoa.threads.posts({ query }),
  youtube: (query: string) => apinoa.youtube.posts({ query }),
};
type Platform = keyof typeof posts;

const { values, positionals } = parseArgs({ allowPositionals: true, options: { platforms: { type: "string", default: "reddit" } } });
const [term] = positionals;
if (!term) {
  console.error(`usage: npx tsx social-listening.ts "<term>" [--platforms ${Object.keys(posts).join(",")}]`);
  process.exit(1);
}

const seen = new Set<string>(existsSync(FILE) ? (JSON.parse(readFileSync(FILE, "utf8")) as string[]) : []);
let fresh = 0;

for (const platform of values.platforms!.split(",") as Platform[]) {
  if (!(platform in posts)) {
    console.error(`unknown platform "${platform}"`);
    continue;
  }
  try {
    const { data } = await posts[platform](term);
    for (const post of data.items) {
      const key = `${post.platform}:${post.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      fresh++;
      const text = (post.title ?? post.text ?? "").replace(/\s+/g, " ").slice(0, 120);
      console.log(`[${post.platform}] ${post.author.handle ?? ""}: ${text}\n  ${post.url}`);
    }
  } catch (err) {
    console.error(`${platform}: ${(err as Error).message}`); // failed calls are not billed
  }
}

writeFileSync(FILE, JSON.stringify([...seen]));
console.log(fresh ? `${fresh} new` : "nothing new");
