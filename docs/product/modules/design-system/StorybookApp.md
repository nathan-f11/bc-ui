# StorybookApp — 组件文档应用

> **模块**：[design-system](index.md) | **级别**：标准 | **最后更新**：2026-05-29

## 关系

| 方向 | 类型 | 目标 | 说明 |
|------|------|------|------|
| → | 嵌入 | [Button](Button.md) | 展示 Button stories |
| → | 嵌入 | [Input](Input.md) | 展示 Input stories |
| → | 嵌入 | [Card](Card.md) | 展示 Card stories |
| → | 嵌入 | [Badge](Badge.md) | 展示 Badge stories |

## 功能

为设计系统组件提供可浏览的文档与 light/dark 主题预览入口。

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

## Non-Goals（刻意不做）

- 不做视觉回归 CI

## 技术摘要

- Storybook 8 + Vite + `@storybook/addon-themes`

## 已知限制

- 开发模式需本地 `pnpm --filter storybook dev`
