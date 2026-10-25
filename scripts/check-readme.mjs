// Type-check every ```ts block of README.md against the built package, so the examples cannot drift
// from the SDK. Each block becomes its own module under .readme-check/.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const blocks = [...readFileSync("README.md", "utf8").matchAll(/```ts\n([\s\S]*?)```/g)].map((m) => m[1]);
rmSync(".readme-check", { recursive: true, force: true });
mkdirSync(".readme-check");
// Blocks build on each other (the client is created once, in the first), so each is prefixed with it.
const prelude = 'import { ApinoaClient, Apinoa, ApinoaError } from "apinoa";\nconst apinoa = new ApinoaClient({ apiKey: "k" });\n';
blocks.forEach((code, i) => {
  const body = code.replace(/^import \{[^}]*\} from "apinoa";\n/gm, "").replace(/^const apinoa = new ApinoaClient\([^)]*\);\n/m, "");
  writeFileSync(`.readme-check/block${i}.ts`, prelude + body + "\nexport {};\n");
});
writeFileSync(
  ".readme-check/tsconfig.json",
  JSON.stringify({
    compilerOptions: {
      strict: true, noEmit: true, target: "ES2022", module: "ESNext", moduleResolution: "Bundler",
      lib: ["ES2022", "DOM"], types: ["node"], skipLibCheck: true, noUnusedLocals: false,
      paths: { apinoa: ["../dist/esm/index.d.ts"] },
    },
    include: ["*.ts"],
  }),
);
execFileSync("npx", ["tsc", "-p", ".readme-check"], { stdio: "inherit" });
rmSync(".readme-check", { recursive: true, force: true });
console.log(`README: ${blocks.length} examples type-check`);
