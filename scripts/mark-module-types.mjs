// dist/esm and dist/cjs share file names, so each folder says which module system its .js files are.
import { writeFileSync } from "node:fs";
writeFileSync("dist/esm/package.json", JSON.stringify({ type: "module" }) + "\n");
writeFileSync("dist/cjs/package.json", JSON.stringify({ type: "commonjs" }) + "\n");
