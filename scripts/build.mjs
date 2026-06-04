import { cp, mkdir, rm } from "node:fs/promises";
import { dirname } from "node:path";

const filesToCopy = ["index.html", "src/styles.css", "src/main.js"];

await rm("dist", { recursive: true, force: true });

for (const file of filesToCopy) {
  const destination = `dist/${file}`;
  await mkdir(dirname(destination), { recursive: true });
  await cp(file, destination);
}

console.log(`Built ${filesToCopy.length} files into dist/`);
