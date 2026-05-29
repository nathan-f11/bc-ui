# ray-use

内部 React UI 组件库 monorepo。

## Skill 项目配置

### 包映射

| 域 | 包 |
|---|---|
| design-system | packages/ui |
| docs-app | apps/storybook |

### 技术栈

| 项 | 值 |
|---|---|
| 框架 | React 19 |
| 样式 | Tailwind CSS v4 + shadcn/ui (Radix) |
| 测试 | vitest + @testing-library/react |
| 构建 | tsup (@ray/ui) |
| 包管理器 | pnpm |

### CSS 约束

| 约束 | 值 |
|------|---|
| 前缀 | N/A |
| RTL | N/A |

### 文档路径

| 用途 | 路径 |
|------|------|
| 产品地图索引（决策层） | docs/product/PRODUCT-MAP.md |
| 模块索引（叙事层） | docs/product/modules/{name}/index.md |
| 组件文件（规约层） | docs/product/modules/{name}/{ComponentName}.md |
| 追溯 | docs/traces/ |
| 类型合约 | docs/specs/ |

### 命令

| 用途 | 命令 |
|------|------|
| 安装 | `pnpm install` |
| 构建 UI 包 | `pnpm --filter @ray/ui build` |
| 测试 | `pnpm --filter @ray/ui test` |
| Storybook | `pnpm --filter storybook dev` |
| 类型目录 | packages/ui/src/types |

### Ray 插件路径

`.cursor/ray`
