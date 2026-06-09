#!/usr/bin/env node
/**
 * Fetch shadcn new-york registry components and write to packages/ui.
 * Usage: node scripts/install-shadcn-components.mjs [component ...]
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const UI_DIR = path.join(ROOT, "packages/ui");
const OUT_DIR = path.join(UI_DIR, "src/components/ui");
const HOOKS_DIR = path.join(UI_DIR, "src/hooks");
const LIB_DIR = path.join(UI_DIR, "src/lib");

const DEFAULT_COMPONENTS = [
  "accordion",
  "hover-card",
  "context-menu",
  "menubar",
  "navigation-menu",
  "alert-dialog",
  "sheet",
  "drawer",
  "calendar",
  "command",
  "form",
  "input-otp",
  "sonner",
  "toast",
  "carousel",
  "chart",
  "resizable",
  "sidebar",
  "data-table",
  "date-picker",
  "combobox",
  "button-group",
  "empty",
  "field",
  "input-group",
  "item",
  "native-select",
  "direction",
  "spinner",
];

const REGISTRY_BASE = "https://ui.shadcn.com/r/styles/new-york";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

function mapTarget(filePath) {
  const normalized = filePath.replace(/^ui\//, "");
  if (filePath.startsWith("hooks/")) {
    return path.join(HOOKS_DIR, path.basename(filePath));
  }
  if (filePath.includes("/ui/")) {
    return path.join(OUT_DIR, path.basename(filePath));
  }
  if (filePath.startsWith("ui/")) {
    return path.join(OUT_DIR, normalized);
  }
  if (filePath.startsWith("lib/")) {
    return path.join(LIB_DIR, path.basename(filePath));
  }
  return path.join(UI_DIR, "src", filePath);
}

async function installComponent(name) {
  const outFile = path.join(OUT_DIR, `${name}.tsx`);
  if (fs.existsSync(outFile)) {
    console.log(`skip ${name} (exists)`);
    return { name, status: "skipped" };
  }

  let data;
  try {
    data = await fetchJson(`${REGISTRY_BASE}/${name}.json`);
  } catch (e) {
    console.error(`fail ${name}: ${e.message}`);
    return { name, status: "failed", error: e.message };
  }

  const deps = new Set(data.dependencies ?? []);
  const devDeps = new Set(data.devDependencies ?? []);

  for (const file of data.files ?? []) {
    const target = mapTarget(file.path);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, file.content);
    console.log(`  wrote ${path.relative(ROOT, target)}`);
  }

  if (deps.size) {
    execSync(`pnpm add ${[...deps].join(" ")}`, { cwd: UI_DIR, stdio: "inherit" });
  }
  if (devDeps.size) {
    execSync(`pnpm add -D ${[...devDeps].join(" ")}`, { cwd: UI_DIR, stdio: "inherit" });
  }

  return { name, status: "ok" };
}

const names = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_COMPONENTS;

console.log(`Installing ${names.length} components...`);
const results = [];
for (const name of names) {
  console.log(`\n== ${name} ==`);
  results.push(await installComponent(name));
}

const failed = results.filter((r) => r.status === "failed");
console.log(`\nDone: ${results.filter((r) => r.status === "ok").length} ok, ${results.filter((r) => r.status === "skipped").length} skipped, ${failed.length} failed`);
if (failed.length) {
  process.exitCode = 1;
  for (const f of failed) console.error(`  - ${f.name}: ${f.error}`);
}
