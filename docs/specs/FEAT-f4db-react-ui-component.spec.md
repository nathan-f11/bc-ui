# FEAT-f4db-react-ui-component — UI 组件库骨架合约

> 来源：docs/traces/FEAT-f4db-react-ui-component.md

## 包导出合约

| 导出符号 | 类型 | 必填 | 描述 |
|---------|------|------|------|
| Button | React component | 是 | 支持 variant/size |
| Input | React component | 是 | 原生 input 封装 |
| Card | React component | 是 | 含 CardHeader/CardTitle/CardDescription/CardContent/CardFooter |
| Badge | React component | 是 | 支持 variant |

## Button variant 枚举

| 值 | 描述 |
|----|------|
| default | 主按钮 |
| secondary | 次要按钮 |
| destructive | 危险操作 |
| outline | 描边 |
| ghost | 幽灵 |
| link | 链接样式 |

## Button size 枚举

| 值 | 描述 |
|----|------|
| default | 默认尺寸 |
| sm | 小 |
| lg | 大 |
| icon | 图标按钮 |

## Badge variant 枚举

| 值 | 描述 |
|----|------|
| default | 默认 |
| secondary | 次要 |
| destructive | 危险 |
| outline | 描边 |

## 治理常量

| 常量 | 值 | 描述 |
|------|---|------|
| BUTTON_REQUIRED_VARIANTS | default, secondary, destructive | Storybook 必须展示的 variant |
| THEME_MODES | light, dark | Storybook 主题模式 |

## 边界情况

- `disabled` Button 不可触发 click，且 `aria-disabled` 或 `disabled` 属性正确
- Input `disabled` 时不可编辑
