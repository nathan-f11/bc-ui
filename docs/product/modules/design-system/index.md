# design-system

> 最后更新：2026-05-29 | 组件数：5

## 用户旅程

### 旅程 1：业务开发引用组件

小李在业务项目中添加 `@ray/ui` workspace 依赖 → 从包入口导入 `Button` / `Input` → 在页面中使用统一风格的组件 → 样式与交互符合设计系统约定。

### 异常旅程

组件 variant 或 disabled 状态未在设计系统内定义 → 开发者查阅 Storybook → 在 Primitives 分类中找到对应 story → 确认正确用法后回到业务代码修正。

## 组件索引

| 组件 | 级别 | 功能 | 文件 |
|------|------|------|------|
| Button | 轻量 | 可点击操作，多 variant/size | [Button.md](Button.md) |
| Input | 轻量 | 文本输入 | [Input.md](Input.md) |
| Card | 轻量 | 内容分组容器 | [Card.md](Card.md) |
| Badge | 轻量 | 状态/标签展示 | [Badge.md](Badge.md) |
| StorybookApp | 标准 | 组件文档与 light/dark 主题预览 | [StorybookApp.md](StorybookApp.md) |
