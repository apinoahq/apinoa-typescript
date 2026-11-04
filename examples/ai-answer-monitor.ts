/**
 * AI-answer monitor: ask AI answer engines a buyer's question and record whether your brand is named in
 * the answer, what the engine itself marked (brands, products, places), and which sources it cites.
 * Appends to answers.csv.
 *
 *   npx tsx ai-answer-monitor.ts "best wool socks for hiking" "Darn Tough"
 *   npx tsx ai-answer-monitor.ts "best wool socks for hiking" "Darn Tough" --engines chatgpt,gemini,google-aio
 *
 * An answer can take a minute or two. Answers vary from one ask to the next, so run the same prompt on a
 * schedule and read the trend, not one result.
 */
import { appendFileSync, existsSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { ApinoaClient } from "@apinoa/sdk";

const apinoa = new ApinoaClient({ timeoutInSeconds: 300 }); // reads APINOA_API_KEY
const FILE = "answers.csv";

const answer = {
  chatgpt: (prompt: string) => apinoa.chatgpt.answer({ prompt }),
  gemini: (prompt: string) => apinoa.gemini.answer({ prompt }),
  "google-aio": (prompt: string) => apinoa.googleAio.answer({ prompt }),
  "google-ai-mode": (prompt: string) => apinoa.googleAiMode.answer({ prompt }),
};
type Engine = keyof typeof answer;

const { values, positionals } = parseArgs({ allowPositionals: true, options: { engines: { type: "string", default: "chatgpt" } } });
const [prompt, brand] = positionals;
if (!prompt || !brand) {
  console.error(`usage: npx tsx ai-answer-monitor.ts "<prompt>" "<brand>" [--engines ${Object.keys(answer).join(",")}]`);
  process.exit(1);
}

if (!existsSync(FILE)) writeFileSync(FILE, "asked_at,engine,prompt,brand,named,marked_by_engine,cited_sources\n");
const csv = (v: string) => `"${v.replaceAll('"', '""')}"`;

for (const engine of values.engines!.split(",") as Engine[]) {
  if (!(engine in answer)) {
    console.error(`unknown engine "${engine}"`);
    continue;
  }
  try {
    const { data } = await answer[engine](prompt);
    if (data.outcome === "noAnswer" || data.outcome === "refused") {
      console.log(`${engine}: ${data.outcome}`);
      continue;
    }
    // Mentions are only what the engine marked itself, often nothing; "named" searches the answer's text.
    const marked = data.mentions.map((m) => m.name);
    const named = data.text.toLowerCase().includes(brand.toLowerCase());
    const host = (url: string) => URL.canParse(url) ? new URL(url).hostname : url;
    const cited = data.sources.filter((s) => s.cited).map((s) => host(s.url));
    console.log(`${engine}: ${brand} ${named ? "is" : "is not"} named. Marked: ${marked.join(", ") || "nothing"}. Cited: ${[...new Set(cited)].join(", ") || "none"}`);
    appendFileSync(FILE, [data.askedAt, engine, csv(prompt), csv(brand), named, csv(marked.join("; ")), csv([...new Set(cited)].join("; "))].join(",") + "\n");
  } catch (err) {
    console.error(`${engine}: ${(err as Error).message}`); // failed calls are not billed
  }
}
