import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const bin = (name) => join(root, "node_modules", ".bin", name);

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("Initializing development environment...");
console.log("Generating...");
run("node", [join(root, "node_modules/rwsdk/dist/scripts/ensure-env.mjs")]);
run(bin("wrangler"), ["types", "--include-runtime", "false"]);
mkdirSync(join(root, ".wrangler"), { recursive: true });
console.log("Done!");
