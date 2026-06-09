# FEAT-217f-testing-stack-completion: 测试体系补齐（6.1 / 6.10 / 6.11 / 6.7）

> mode: dev

## 当前产品状态（Before）

> 来源：docs/product/modules/design-system/StorybookApp.md、现有测试与 stories
> 组件模板级别：StorybookApp 标准；Primitives 轻量

**6.1 单元测试**
- `cn()` 仅有间接使用，无边界测试（空输入、冲突 Tailwind 类、条件 class 等）
- `BUTTON_VARIANTS`、`BADGE_VARIANTS`、`BUTTON_SIZES` 等常量无完整性/类型守卫测试

**6.10 Storybook ↔ RTL**
当前 14 个 story，8 个 RTL 用例，映射不全：

| 组件 | Stories | 现有 RTL |
|------|---------|----------|
| Button | 7 | 4（3 variant + disabled） |
| Input | 2 | 1 |
| Card | 1 | 1 |
| Badge | 4 | 1 |

**6.11 视觉回归**
- Chromatic 已首次运行（Build #1，14 snapshots auto-accepted），本地脚本已加但未提交
- `StorybookApp.md` Non-Goals 仍为「不做视觉回归 CI」
- GitHub Actions Chromatic workflow 未配置

**6.7 E2E**
- 无 Playwright；无 smoke 覆盖 Storybook 导航与渲染

## 场景

> 小王是设计系统维护者。他改了 Button 的 `destructive` 色值，本地 Storybook 看着正常就提交了。一周后 Card 在 dark 主题下边框消失——没有测试拦住。
>
> 变更后：
> - `cn()` 和 variant 常量有边界单测
> - 每个 story 有对应 RTL 测试（`composeStories`）
> - Chromatic 在 PR 上自动做视觉 diff（基线已建立）
> - Playwright smoke 验证 Storybook 能打开、story 能渲染、主题能切换

## 关键规则

- 测试分层：Vitest 单元 → RTL story 对齐 → Chromatic 视觉 → Playwright smoke
- Story 与 RTL **1:1**：每个 `export const Xxx: Story` 至少有 1 个对应用例
- Chromatic 通过环境变量 `CHROMATIC_PROJECT_TOKEN` 配置，**不进仓库**
- Playwright smoke 针对 **Storybook 静态构建**（`storybook build` + 本地 serve），不依赖 dev server
- 沿用 Ray TDD：`/qa` 先写测试 RED → `/coder` 实现

## 不变式影响（完整级组件必填）

不适用（无完整级状态机组件）。
须保持：disabled Button 不可触发 click；variant 枚举与 stories 一致。

## 验收标准

### 6.1 工具函数与常量边界测试
- [ ] `packages/ui/src/lib/__tests__/cn.test.ts`：`cn()` 覆盖空输入、单类、冲突类（`twMerge`）、条件/falsy、数组
- [ ] `packages/ui/src/types/__tests__/components.test.ts`：variant/size 常量完整、无重复、`BUTTON_REQUIRED_STORY_VARIANTS ⊆ BUTTON_VARIANTS`

### 6.10 Storybook ↔ RTL 对齐
- [ ] 使用 `@storybook/react` 的 `composeStories`（或 `@storybook/test`）
- [ ] `apps/storybook/stories/*.stories.test.tsx` 与 4 个 story 文件 **1:1**
- [ ] 14 个 story 均有 RTL 用例（至少断言关键文本/role 可见）
- [ ] `pnpm --filter storybook test`（或统一 test 命令）全通过

### 6.11 Chromatic 视觉回归
- [x] 安装 `chromatic` CLI，`pnpm --filter storybook chromatic` 可上传快照
- [x] 首次 baseline：Build #1，14 snapshots auto-accepted
- [ ] 提交 chromatic 脚本与 `.env.example`（不含真实 token）
- [ ] GitHub Actions workflow：PR 触发 Chromatic（`CHROMATIC_PROJECT_TOKEN` secret）
- [ ] 更新 `StorybookApp.md`：移除「不做视觉回归 CI」Non-Goal

### 6.7 Playwright smoke E2E
- [ ] 新增 `apps/e2e` + `@playwright/test`
- [ ] `playwright.config.ts`：对 `storybook-static` 起 serve 后跑测试
- [ ] Smoke 用例（≥4）：首页加载、Button Default story、Input story、light/dark 切换
- [ ] 根目录 `pnpm test:e2e` 可执行

### 综合
- [ ] `pnpm --filter @ray/ui test` 全绿
- [ ] `pnpm test:e2e` 全绿
- [ ] `CLAUDE.md` 更新测试命令（unit / story / e2e / chromatic）

## Non-Goals（刻意不做）

- 不做 Applitools / Percy（仅 Chromatic）
- 不做 Playwright MCP / Healer（6.8）
- 不做跨浏览器矩阵（6.9，先 Chromium）
- 不做 MSW / API mock（6.6）
- 不做 Vue 测试（6.3 / 6.5）
- Chromatic v1 不强制 required check 阻塞 merge（仅上报）

## 受影响的组件

- **StorybookApp**（标准）：Chromatic CI、Playwright smoke；更新 Non-Goals、交互表
- **Button / Input / Card / Badge**（轻量）：每个 story 对应 RTL 测试
- **内部 `cn()`**：新增单元测试文件

## 模式

frontend

## API 交互（如有）

无。

## 产品地图更新要求

开发完成后，`/update-map` 须：
- [ ] 更新 `StorybookApp.md`：Chromatic 视觉回归、Playwright smoke、移除旧 Non-Goal
- [ ] 更新 `design-system/index.md`：异常旅程补充「CI 视觉 diff 失败」路径
- [ ] 各 Primitive `.md`：边界情况补充「story 与测试对齐」约定

## 治理合规（case-specific，非 PATCH 必填）

### PD 边界定义
- A11y 要求：RTL 测试优先 `getByRole`
- 其余 PD 未定义

### 研发补充（基于代码上下文）
- Chromatic token 仅存 GitHub Secrets / 本地 `.env.local`（gitignore）
- Playwright 截图仅 CI 产物，不进 git
- 测试执行遵循 Ray pipeline：`vitest run`、`playwright test`（非 watch）

## Open Issues（待决问题）

- [ ] Story 测试放 `apps/storybook`（已建议采纳）
- [x] Chromatic 账号与 project token 已就绪（`CHROMATIC_PROJECT_TOKEN` 环境变量）
- [ ] GitHub Actions 在 `nathan-f11/bc-ui` 添加 `CHROMATIC_PROJECT_TOKEN` secret

## Baseline

> 以下文件的内容哈希记录了起草本需求时的产品状态。

| 文件 | SHA256 前 8 位 |
|------|---------------|
| docs/product/PRODUCT-MAP.md | 691d5d96 |
| docs/product/modules/design-system/StorybookApp.md | 31d0a7f2 |
| packages/ui/src/__tests__/FEAT-f4db-react-ui-component.test.tsx | ec2a425a |
