# FEAT-cc94-shadcn-组件全集补齐: shadcn 组件全集补齐

> mode: dev

## 当前产品状态（Before）

> 来源：`docs/product/modules/design-system/index.md`、现有 `packages/ui` 导出
> 组件模板级别：现有 4 原语均为轻量；StorybookApp 为标准

`@ray/ui` 当前仅导出 **Button、Input、Card、Badge** 四个轻量原语。Storybook 有 4 组 story（共 14 个 variant story）及对应 `composeStories` RTL 测试；Chromatic baseline 为 14 snapshots。shadcn/ui 官方组件目录共 **59** 个，覆盖率约 **7%**。FEAT-f4db 的 Non-Goals 明确排除了首批 4 个以外的组件；测试栈（FEAT-217f）已建立 story ↔ RTL 1:1 与 Chromatic/Playwright 基础设施，但组件面仍严重不足，业务方无法引用 Dialog、Select、Tabs 等常见原语。

## 场景

> 小李要在业务页面做一个带筛选、分页、确认弹窗的数据列表。他打开 `@ray/ui` 文档，发现只有 Button 和 Input，Dialog、Table、Select 全都没有，只能从 shadcn 官网 copy 进业务仓库，样式 token 不一致、无障碍行为也无法统一维护。
>
> 变更后：小李从 `@ray/ui` 一次性导入 `Dialog`、`Table`、`Select`、`Pagination` 等原语；设计同学在 Storybook 浏览全部 59 个组件的 light/dark 示例；PR 上 Chromatic 自动捕获视觉 diff，Playwright smoke 验证 Storybook 仍可正常渲染。

> 小王是设计系统维护者。他收到「对齐 shadcn」的需求，希望 **一次 pipeline** 把缺口全部补上，而不是分多波 PR。他运行 `/pipeline`，最终 `packages/ui/src/index.ts` 导出与 [shadcn 组件目录](https://ui.shadcn.com/docs/components) 一一对应（除已存在的 4 个外新增 55 个），每个组件至少有 1 个 Storybook story。

## 关键规则

- **copy-in 模式不变**：通过 `npx shadcn@latest add <name>` 将源码写入 `packages/ui/src/components/ui/`，归仓库所有
- **style 锁定**：延续 `components.json` 的 `new-york` + `neutral` + CSS variables + `lucide` icons
- **安装顺序**：先装被依赖的基础组件（如 `label` → `field`；`dialog` → `sheet` / `alert-dialog`；`table` → `data-table`；`calendar` + `popover` → `date-picker`；`command` + `popover` → `combobox`）
- **公共导出**：所有新组件及其子部件、variants helper 均加入 `packages/ui/src/index.ts`
- **Storybook**：每个组件至少 1 个 `.stories.tsx`，归入合理分类（Primitives / Forms / Overlays / Navigation / Feedback / Data Display / Layout / Advanced）
- **测试对齐 FEAT-217f**：每个 `export const Xxx: Story` 至少有 1 个 `composeStories` RTL 用例；`pnpm test` 全绿
- **构建**：`pnpm --filter @ray/ui build` 与 `pnpm --filter storybook build` 成功
- **Chromatic**：新 story 纳入视觉回归；首次 run 接受新 baseline（预期 snapshot 数从 14 增至约 80–120+）
- **依赖管理**：仅安装 shadcn 官方 recipe 要求的 peer/runtime 依赖，统一记录在 `packages/ui/package.json`

### 待新增组件清单（55 个）

| 分类 | 组件 |
|------|------|
| 表单 | Label, Textarea, Checkbox, Radio Group, Switch, Select, Native Select, Input OTP, Input Group, Field |
| 弹层 / 浮层 | Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Dropdown Menu, Context Menu, Hover Card |
| 导航 | Tabs, Breadcrumb, Navigation Menu, Menubar, Pagination, Separator |
| 反馈 | Alert, Progress, Skeleton, Sonner, Toast, Spinner |
| 数据展示 | Table, Avatar, Accordion, Collapsible, Scroll Area, Empty, Item, Kbd, Typography |
| 输入增强 | Combobox, Command |
| 布局 / 媒体 | Aspect Ratio, Resizable, Sidebar |
| 日期 | Calendar, Date Picker |
| 交互 | Toggle, Toggle Group, Button Group, Slider |
| 高级 | Carousel, Chart, Data Table |
| 国际化基础 | Direction |

**附注 — 额外 runtime 依赖（按 shadcn 官方 recipe）**：

| 组件 | 典型依赖 |
|------|---------|
| Calendar / Date Picker | `react-day-picker`, `date-fns` |
| Carousel | `embla-carousel-react` |
| Chart | `recharts` |
| Command / Combobox | `cmdk` |
| Drawer | `vaul` |
| Input OTP | `input-otp` |
| Resizable | `react-resizable-panels` |
| Data Table | `@tanstack/react-table` |
| Sonner | `sonner` |
| Toast | `@radix-ui/react-toast`（shadcn toast recipe） |
| 其余 Radix 原语 | 对应 `@radix-ui/react-*` 包（随 `shadcn add` 自动引入） |

## 不变式影响（完整级组件必填）

本次大量新建组件，建议模板级别分配：

| 级别 | 组件（建议） |
|------|-------------|
| 轻量 | Label, Separator, Kbd, Typography, Aspect Ratio, Skeleton, Spinner, Progress, Badge(已有), Avatar, Empty, Item |
| 标准 | 大多数表单控件、Table、Tabs、Breadcrumb、 Pagination、Alert、Accordion、Collapsible、Toggle 系、Button Group、Input Group、Native Select、Scroll Area |
| 完整 | Dialog, Alert Dialog, Sheet, Drawer, Dropdown Menu, Context Menu, Popover, Tooltip, Select, Combobox, Command, Date Picker, Calendar, Sidebar, Navigation Menu, Menubar, Carousel, Data Table, Chart, Resizable, Sonner/Toast, Input OTP, Field |

**须保持的不变式（来自现有 Button）**：
- disabled 控件不可触发交互
- focus ring 在键盘导航时可见
- variant 枚举与 stories 一致

**新建完整级组件须定义**：
- 弹层类：打开时焦点陷阱；Esc 关闭；关闭后焦点还原
- Select/Combobox：键盘上下选择、Enter 确认、typeahead
- Toast/Sonner：同时最多 N 条可见（遵循 shadcn 默认）；不阻塞页面交互

## 验收标准

### 组件覆盖
- [ ] shadcn 官方 59 个组件全部存在于 `packages/ui/src/components/ui/`（含已有 4 个）
- [ ] `packages/ui/src/index.ts` 导出全部公共 API（组件 + variants + 类型）
- [ ] 无组件仍依赖业务层路径别名 `@/…` 而未在 `packages/ui` 内解析

### Storybook
- [ ] 每个组件至少 1 个 story 文件于 `apps/storybook/stories/`
- [ ] light / dark 主题下 representative stories 可正常渲染
- [ ] `pnpm --filter storybook build` 成功

### 测试
- [ ] 每个 story 有 ≥1 个 `composeStories` RTL 测试（`*.stories.test.tsx`）
- [ ] `pnpm test` 全绿（unit + story RTL）
- [ ] `pnpm test:e2e` smoke 仍通过（必要时扩展 smoke 覆盖新增分类导航）

### 构建与类型
- [ ] `pnpm --filter @ray/ui build` 成功
- [ ] `pnpm --filter @ray/ui typecheck` 无错误
- [ ] tsup 正确打包新增组件（含 side-effect CSS）

### 视觉回归
- [ ] Chromatic build 成功，新 snapshots 已建立 baseline
- [ ] 无意外 visual diff（有意变更须在 PR 说明）

### 文档（pipeline 末 `/update-map`）
- [ ] `docs/product/modules/design-system/index.md` 组件索引表更新为 59 项
- [ ] 每个新组件有独立 `docs/product/modules/design-system/{ComponentName}.md`（按建议模板级别）
- [ ] `docs/product/PRODUCT-MAP.md` 核心组件列表摘要更新

## Non-Goals（刻意不做）

- 不做业务页面或路由应用
- 不自定义 shadcn 以外的设计 variant（沿用 new-york 默认）
- 不为每个组件写深度单元测试（仅 story RTL + 已有 `cn`/常量测试）
- 不实现 RTL 布局适配（项目 CLAUDE.md 标记 RTL: N/A）
- 不发布到公共 npm registry
- 不做 MSW / 跨浏览器矩阵 / Playwright Healer（延续 FEAT-217f Non-Goals）
- 不重构已有 4 个组件 API（除非 shadcn add 覆盖冲突需最小合并）

## 受影响的组件

- **全部现有 + 全部新增** `modules/design-system/*.md`
- `StorybookApp.md`（标准）：
  - 交互表：新增组件分类导航
  - 已知限制：移除「仅 4 个 primitive」描述
  - Chromatic snapshot 规模更新
- `Button.md` / `Input.md` / `Card.md` / `Badge.md`（轻量）：关系表新增「被 X 组件嵌入」条目（如 Dialog 内 Button）
- **新建 55 个组件文件**，各含：关系表、交互表、状态（标准/完整级）、边界情况

## 模式

frontend

## API 交互（如有）

无后端 API。纯 UI 包扩展。

## 产品地图更新要求

开发完成后，`/update-map` 须：
- [ ] 更新 `docs/product/PRODUCT-MAP.md` 模块描述（组件数 5 → 59）
- [ ] 重写 `modules/design-system/index.md` 用户旅程与组件索引表
- [ ] 为 55 个新组件各建 `{ComponentName}.md`，标注轻量/标准/完整级别
- [ ] 更新 `StorybookApp.md`：旅程、Non-Goals、Chromatic 基线说明

## 治理合规

### PD 边界定义
- 安全护栏：PD 未定义
- 度量目标：PD 未定义
- 性能约束：PD 未定义
- A11y 要求：PD 未定义

### 研发补充（基于代码上下文）
- **已有约束**：Radix 原语提供 focus trap、ARIA；Button 已有 disabled/focus ring 约定；FEAT-217f 要求 story ↔ RTL 1:1
- **风险点**：
  - 单次 PR 体量极大（~55 组件 × story × test），review 与 CI 时间显著增长
  - Chart/Recharts、Data Table/TanStack 增加 bundle 体积——消费方 tree-shaking 依赖正确 export
  - Sonner 与 Toast 并存，业务方可能困惑选用哪个
  - Chromatic snapshot 费用与 CI 时长
- **建议补充**：
  - 完整级弹层组件须通过键盘-only smoke 验证（Tab/Esc）
  - 新 Radix 依赖统一 peer 还是 direct dependency 需与现有 `@radix-ui/react-slot` 策略一致
  - `Sidebar` 等大型组件 story 可用 composition demo，避免 snapshot 过多

## Open Issues（待决问题）

- [ ] **Sonner vs Toast**：shadcn 同时提供两者；全集对齐意味着两个都加，是否需要在 `index.md` 注明推荐默认（Sonner）？
- [ ] **Typography**：shadcn 以样式工具类为主，是否作为组件导出还是仅文档示例？
- [ ] **Chromatic 配额**：snapshot 从 14 → 100+ 是否需调整 story 粒度（每组件 1 个 default story vs 多 variant）？
- [ ] **FEAT-217f 合并顺序**：建议先合并测试栈 PR，再跑本 pipeline，否则需在本 FEAT 内一并补齐测试基础设施

## Baseline

> 以下文件的内容哈希记录了起草本需求时的产品状态。

| 文件 | SHA256 前 8 位 |
|------|---------------|
| docs/product/PRODUCT-MAP.md | 691d5d96 |
| docs/product/modules/design-system/index.md | bce185f1 |
| docs/product/modules/design-system/Button.md | 290a2a43 |
