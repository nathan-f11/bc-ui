# Input — 输入框

> **模块**：[design-system](index.md) | **级别**：轻量 | **最后更新**：2026-05-29

## 关系

| 方向 | 类型 | 目标 | 说明 |
|------|------|------|------|
| ← | 嵌入 | [StorybookApp](StorybookApp.md) | Storybook 展示默认/disabled |

## 功能

单行文本输入控件。

## 界面结构

```
[ placeholder / value ]
```

## 交互

| 触发 | 条件 | 行为 | 视觉反馈 |
|------|------|------|---------|
| 输入 | 未 disabled | 更新值 | 光标与文字 |
| Tab 聚焦 | 未 disabled | 获得焦点 | focus ring |
| 输入 | disabled | 不可编辑 | 半透明 |

## 已知限制

- v1 不含 validation 状态样式
