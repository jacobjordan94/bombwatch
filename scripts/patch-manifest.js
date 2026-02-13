import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifestPath = resolve(__dirname, "../dist/manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));

// Firefox MV3 requires background.scripts instead of background.service_worker.
// Adding scripts alongside service_worker lets both Chrome and Firefox work from
// the same build output.
if (manifest.background?.service_worker) {
  manifest.background.scripts = [manifest.background.service_worker];
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log("Patched dist/manifest.json with background.scripts for Firefox");
