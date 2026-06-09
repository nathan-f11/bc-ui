#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UI_SRC = path.join(ROOT, "packages/ui/src");

const REPLACEMENTS = [
  [/@\/registry\/new-york\/ui\/([^"']+)/g, "@/components/ui/$1"],
  [/@\/registry\/new-york\/hooks\/([^"']+)/g, "@/hooks/$1"],
  [/@\/registry\/new-york\/lib\/utils/g, "@/lib/utils"],
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      for (const [from, to] of REPLACEMENTS) {
        const next = content.replace(from, to);
        if (next !== content) {
          content = next;
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(full, content);
        console.log("fixed", path.relative(ROOT, full));
      }
    }
  }
}

walk(UI_SRC);
console.log("done");
