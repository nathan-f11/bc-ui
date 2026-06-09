#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UI_DIR = path.join(ROOT, "packages/ui/src/components/ui");
const DOCS_DIR = path.join(ROOT, "docs/product/modules/design-system");

const EXISTING = new Set(["Button", "Input", "Card", "Badge", "StorybookApp"]);

const LEVEL = {
  Dialog: "完整",
  Select: "完整",
  Sidebar: "完整",
  Combobox: "完整",
  "Date Picker": "完整",
  "Data Table": "完整",
};

function pascal(name) {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function listComponents() {
  return fs
    .readdirSync(UI_DIR)
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => f.replace(".tsx", ""))
    .sort();
}

function docName(kebab) {
  return pascal(kebab);
}

function template(name, kebab, level) {
  return `# ${name} — ${kebab}

> **模块**：[design-system](index.md) | **级别**：${level} | **最后更新**：2026-06-09

## 关系

| 方向 | 类型 | 目标 | 说明 |
|------|------|------|------|
| ← | 嵌入 | [StorybookApp](StorybookApp.md) | Storybook 展示 Default story |

## 功能

shadcn/ui new-york 风格 ${name} 组件，源码 copy-in 于 \`packages/ui\`。

## 交互

| 触发 | 条件 | 行为 | 视觉反馈 |
|------|------|------|---------|
| 默认 | — | 见 Storybook Default story | 见 Storybook |

## 已知限制

- 沿用 shadcn 默认 variant，无自定义扩展
`;
}

const components = listComponents();
for (const kebab of components) {
  const name = docName(kebab);
  if (EXISTING.has(name)) continue;
  const level = LEVEL[name] ?? "标准";
  fs.writeFileSync(path.join(DOCS_DIR, `${name}.md`), template(name, kebab, level));
}

// Typography story-only
if (!fs.existsSync(path.join(DOCS_DIR, "Typography.md"))) {
  fs.writeFileSync(
    path.join(DOCS_DIR, "Typography.md"),
    template("Typography", "typography", "轻量").replace(
      "shadcn/ui new-york 风格 Typography 组件",
      "Typography 样式示例（Storybook 文档，非独立导出组件）",
    ),
  );
}

const rows = [
  ...components.map((k) => {
    const n = docName(k);
    const level = LEVEL[n] ?? (["label", "separator", "kbd", "skeleton", "spinner", "progress", "avatar", "empty", "aspect-ratio", "badge"].includes(k) ? "轻量" : "标准");
    return `| ${n} | ${level} | shadcn ${k} | [${n}.md](${n}.md) |`;
  }),
  `| Typography | 轻量 | 排版样式示例 | [Typography.md](Typography.md) |`,
];

const index = `# design-system

> 最后更新：2026-06-09 | 组件数：${components.length + 1}

## 用户旅程

### 旅程 1：业务开发引用组件

小李在业务项目中添加 \`@ray/ui\` workspace 依赖 → 从包入口导入任意 shadcn 对齐组件（Dialog、Select、Table 等）→ 在页面中使用统一风格 → 样式与交互符合设计系统约定。

### 旅程 2：设计系统维护者扩展组件

小王运行 \`npx shadcn@latest add\` 或 registry 脚本 → 组件写入 \`packages/ui/src/components/ui/\` → 更新 \`index.ts\` 导出 → 添加 Storybook story 与 RTL 测试 → Chromatic 捕获视觉 diff。

### 异常旅程

PR 视觉回归失败 → 开发者在 Chromatic 查看 diff → 确认有意变更或修复 UI → 重新推送。

## 组件索引

| 组件 | 级别 | 功能 | 文件 |
|------|------|------|------|
| Button | 轻量 | 可点击操作，多 variant/size | [Button.md](Button.md) |
| Input | 轻量 | 文本输入 | [Input.md](Input.md) |
| Card | 轻量 | 内容分组容器 | [Card.md](Card.md) |
| Badge | 轻量 | 状态/标签展示 | [Badge.md](Badge.md) |
| StorybookApp | 标准 | 组件文档与 light/dark 主题预览 | [StorybookApp.md](StorybookApp.md) |
${rows.join("\n")}
`;

fs.writeFileSync(path.join(DOCS_DIR, "index.md"), index);

const productMap = `# ray-use — 产品地图索引

> 内部 React UI 设计系统组件库（shadcn/ui 对齐）。
> 最后更新：2026-06-09

## 模块索引

| 模块 | 核心组件 | 描述 | 详情 |
|------|---------|------|------|
| design-system | ${components.length + 1} 个 shadcn 对齐组件 + StorybookApp | 可复用 UI 原语（Forms / Overlays / Navigation / Feedback / Data / Layout / Advanced） | [modules/design-system/index.md](modules/design-system/index.md) |
`;

fs.writeFileSync(path.join(ROOT, "docs/product/PRODUCT-MAP.md"), productMap);
console.log(`Updated docs for ${components.length} components + Typography`);
