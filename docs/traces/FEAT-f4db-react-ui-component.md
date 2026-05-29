# FEAT-f4db-react-ui-component: React UI 组件库骨架

> mode: dev

## 当前产品状态（Before）

> 来源：无（绿field 项目）
> 组件模板级别：N/A

`ray-use` 目录当前仅有 Ray 工作流配置（`.cursor/skills/ray/`），无 `package.json`、无源码、无产品文档。业务项目无法通过 workspace 引用任何 UI 组件；不存在 Storybook 或 shadcn 配置。

## 场景

> 小李是业务线前端，要在新页面里用统一风格的 Button 和 Input。他打开内部文档，发现还没有可引用的组件库，只能各自 copy 样式，设计不一致、无障碍也难保证。
>
> 变更后：小李在业务项目的 `package.json` 里添加 `"@ray/ui": "workspace:*"`，从 `@ray/ui` 导入 `Button`、`Input`；设计同学在 `apps/storybook` 里浏览各 variant 和 light/dark 主题，作为视觉验收入口。

## 关键规则

- 组件源码归仓库所有（shadcn copy-in 模式），不依赖外部 UI npm 包作为黑盒
- Monorepo：`packages/ui` 为唯一组件发布面；`apps/storybook` 仅消费 `@ray/ui`
- 公共导出集中在 `packages/ui/src/index.ts`
- 首批组件：`button`、`input`、`card`、`badge`，每个须有对应 `.stories.tsx`
- shadcn 初始化：`npx shadcn@latest init -d --base radix`（非交互）
- v1 **不**单独建 `packages/tokens`（CSS 变量 / theme 先放在 `packages/ui`；token 包留作后续 FEAT）

## 不变式影响（完整级组件必填）

不适用。首批均为轻量/标准级；无完整级状态机组件。

## 验收标准

- [ ] 根目录 `pnpm install` 成功
- [ ] `pnpm --filter @ray/ui build` 成功
- [ ] `pnpm --filter storybook dev` 可启动并在浏览器打开 Storybook
- [ ] `packages/ui/src/index.ts` 导出 Button、Input、Card、Badge
- [ ] Button stories 含 `default`、`secondary`、`destructive` 等 variant
- [ ] Input、Card、Badge 各有至少 1 个基础 story
- [ ] Storybook 支持 **light / dark** 主题切换
- [ ] 组件基于 Radix + Tailwind v4，TypeScript 严格模式可用

## Non-Goals（刻意不做）

- 不做业务页面或路由应用
- 不接后端 API 或数据层
- 不发布到公共 npm registry
- v1 不包含 `packages/tokens` 独立包
- 不做视觉回归 CI（仅 Storybook 本地入口）
- 不实现除首批 4 个以外的 shadcn 组件

## 受影响的组件

- `modules/design-system/Button.md`（轻量）— 新建：交互表（hover/focus/disabled）、variant 列表
- `modules/design-system/Input.md`（轻量）— 新建：基础输入、disabled、placeholder
- `modules/design-system/Card.md`（轻量）— 新建：Header/Content/Footer 结构
- `modules/design-system/Badge.md`（轻量）— 新建：variant stories
- `modules/design-system/index.md`（叙事层）— 新建：设计系统用户旅程、组件索引
- `docs/product/PRODUCT-MAP.md` — 新建：设计系统模块条目

## 模式

frontend

## API 交互（如有）

无。

## 产品地图更新要求

开发完成后，`/update-map` 须：

- [ ] 创建 `docs/product/PRODUCT-MAP.md`（含设计系统模块）
- [ ] 创建 `modules/design-system/index.md`
- [ ] 创建 Button、Input、Card、Badge 组件规约（轻量模板）
- [ ] 创建 StorybookApp（标准级）组件文件，含 light/dark 主题交互
- [ ] 关系表：StorybookApp → 嵌入 各 Primitive 组件

## 治理合规（case-specific，非 PATCH 必填）

### PD 边界定义

- 安全护栏：PD 未定义
- 度量目标：PD 未定义
- 性能约束：PD 未定义
- A11y 要求：**WCAG AA 颜色对比度**；组件须支持 **keyboard 导航**（Radix 默认行为须保留）

### 研发补充（基于代码上下文）

- 已有约束：无（绿field）
- 风险点：Tailwind v4 + shadcn CLI 版本兼容；Storybook 与 React 19 peer 依赖
- 建议补充：
  - Storybook `addon-themes` 或等效方案实现 light/dark
  - `packages/ui` 构建产出 ESM + 类型声明（`dts`）
  - `CLAUDE.md` Boot Sector 写入测试/构建命令供 `/pipeline` 使用

## Open Issues（待决问题）

- [ ] `packages/ui` 构建工具选型：tsup vs vite library mode（pipeline 阶段由 architect/coder 按 monorepo 惯例选定）
- [ ] Storybook 版本：8.x stable（与 React 19 兼容矩阵需在 spike 中验证）
- [ ] 是否在根 trace 后立即运行 `/origin`，或等 `/pipeline` 完成后再 `/origin`

## Baseline

> 以下文件的内容哈希记录了起草本需求时的产品状态。

| 文件 | SHA256 前 8 位 |
|------|---------------|
| docs/product/PRODUCT-MAP.md | N/A |
| docs/product/modules/design-system/index.md | N/A |
| docs/product/modules/design-system/Button.md | N/A |
