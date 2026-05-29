# Button — 按钮

> **模块**：[design-system](index.md) | **级别**：轻量 | **最后更新**：2026-05-29

## 关系

| 方向 | 类型 | 目标 | 说明 |
|------|------|------|------|
| ← | 嵌入 | [StorybookApp](StorybookApp.md) | Storybook 展示各 variant |

## 功能

触发用户操作的可点击按钮，支持多种视觉 variant 与尺寸。

## 界面结构

```
[ Button label ]
```

## 交互

| 触发 | 条件 | 行为 | 视觉反馈 |
|------|------|------|---------|
| 点击 | 未 disabled | 触发 onClick | hover 背景加深 |
| Tab 聚焦 | 未 disabled | 获得焦点 | focus ring |
| 点击 | disabled | 无动作 | 半透明，不可点击 |

## 已知限制

- v1 不含 loading 态
