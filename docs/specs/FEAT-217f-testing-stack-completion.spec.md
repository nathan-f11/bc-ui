# FEAT-217f-testing-stack-completion — 测试体系合约

> 来源：docs/traces/FEAT-217f-testing-stack-completion.md

## 单元测试合约（6.1）

### cn(inputs)

| 场景 | 输入 | 期望 |
|------|------|------|
| 空 | 无参 | `""` |
| 单类 | `"foo"` | 含 `foo` |
| 冲突合并 | `"px-2 px-4"` | 仅保留 `px-4` |
| 条件 falsy | `false, "bar"` | 含 `bar` 不含 false |
| 数组 | `["a", "b"]` | 含 `a` 和 `b` |

### 常量不变式

| 规则 | 描述 |
|------|------|
| VARIANTS_UNIQUE | 各 VARIANT 数组无重复项 |
| REQUIRED_SUBSET | `BUTTON_REQUIRED_STORY_VARIANTS ⊆ BUTTON_VARIANTS` |
| UI_EXPORTS_COUNT | `UI_EXPORTS.length === 4` |

## Story ↔ RTL 映射（6.10）

每个 story export 须有同名 `it()` 用例：

| Story 文件 | Story exports | 数量 |
|-----------|---------------|------|
| Button.stories.tsx | Default, Secondary, Destructive, Outline, Ghost, Link, Disabled | 7 |
| Input.stories.tsx | Default, Disabled | 2 |
| Card.stories.tsx | Default | 1 |
| Badge.stories.tsx | Default, Secondary, Destructive, Outline | 4 |

## E2E Smoke（6.7）

| ID | 路径 | 断言 |
|----|------|------|
| shell | `/` | Storybook 根节点可见 |
| button-default | `/story/primitives-button--default` | `button` 含文本 Button |
| input-default | `/story/primitives-input--default` | `textbox` 可见 |
| theme-dark | button story + toolbar | `html` 或 wrapper 含 `dark` class |

## Chromatic（6.11）

- CLI: `pnpm --filter storybook chromatic`
- CI: PR 触发，token 来自 `CHROMATIC_PROJECT_TOKEN` secret
