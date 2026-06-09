# StorybookApp — 组件文档应用

> **模块**：[design-system](index.md) | **级别**：标准 | **最后更新**：2026-06-09

## 关系

| 方向 | 类型 | 目标 | 说明 |
|------|------|------|------|
| → | 嵌入 | design-system 全部组件 | 60+ Default stories，分类：Primitives / Forms / Overlays / Navigation / Feedback / Data Display / Layout / Advanced |

## 功能

为设计系统全部 shadcn 对齐组件提供可浏览的文档与 light/dark 主题预览入口。

## 界面结构

```
┌ Storybook shell ──────────────┐
│ Sidebar (stories) │ Canvas    │
│ Theme toggle      │           │
└─────────────────────────────────┘
```

## 交互

| 触发 | 条件 | 行为 | 视觉反馈 |
|------|------|------|---------|
| 选择 story | — | 渲染对应组件 | Canvas 更新 |
| 切换主题 | toolbar | 切换 light/dark | `dark` class 切换 |

## 状态

- **light**：默认浅色主题
- **dark**：深色主题，根节点带 `dark` class

## 边界情况

- 无 story 选中时显示 Storybook 默认空态
- 每个 story 须有对应 RTL 测试（`*.stories.test.tsx`），当前 60/60 对齐

## Non-Goals（刻意不做）

- 不使用 Applitools / Percy（仅 Chromatic，待 baseline 更新）

## 技术摘要

- Storybook 8 + Vite + `@storybook/addon-themes`
- Vitest + composeStories RTL（60 stories）
- Chromatic 视觉回归（PR CI，snapshot 待重新 baseline）
- Playwright smoke E2E（`apps/e2e`）

## 已知限制

- 开发模式需本地 `pnpm --filter storybook dev`
- 完整测试套件约 4–5 分钟（collect 阶段较慢）
