# design-system

> 最后更新：2026-06-09 | 组件数：61

## 用户旅程

### 旅程 1：业务开发引用组件

小李在业务项目中添加 `@ray/ui` workspace 依赖 → 从包入口导入任意 shadcn 对齐组件（Dialog、Select、Table 等）→ 在页面中使用统一风格 → 样式与交互符合设计系统约定。

### 旅程 2：设计系统维护者扩展组件

小王运行 `npx shadcn@latest add` 或 registry 脚本 → 组件写入 `packages/ui/src/components/ui/` → 更新 `index.ts` 导出 → 添加 Storybook story 与 RTL 测试 → Chromatic 捕获视觉 diff。

### 异常旅程

PR 视觉回归失败 → 开发者在 Chromatic 查看 diff → 确认有意变更或修复 UI → 重新推送。

## 组件索引

| 组件 | 级别 | 功能 | 文件 |
|------|------|------|------|
| Button | 轻量 | 可点击操作，多 variant/size | [Button.md](Button.md) |
| Input | 轻量 | 文本输入 | [Input.md](Input.md) |
| Card | 轻量 | 内容分组容器 | [Card.md](Card.md) |
| Badge | 轻量 | 状态/标签展示 | [Badge.md](Badge.md) |
| StorybookApp | 标准 | 组件文档与 light/dark 主题预览 | [StorybookApp.md](StorybookApp.md) |
| Accordion | 标准 | shadcn accordion | [Accordion.md](Accordion.md) |
| Alert | 标准 | shadcn alert | [Alert.md](Alert.md) |
| AlertDialog | 标准 | shadcn alert-dialog | [AlertDialog.md](AlertDialog.md) |
| AspectRatio | 轻量 | shadcn aspect-ratio | [AspectRatio.md](AspectRatio.md) |
| Avatar | 轻量 | shadcn avatar | [Avatar.md](Avatar.md) |
| Badge | 轻量 | shadcn badge | [Badge.md](Badge.md) |
| Breadcrumb | 标准 | shadcn breadcrumb | [Breadcrumb.md](Breadcrumb.md) |
| Button | 标准 | shadcn button | [Button.md](Button.md) |
| ButtonGroup | 标准 | shadcn button-group | [ButtonGroup.md](ButtonGroup.md) |
| Calendar | 标准 | shadcn calendar | [Calendar.md](Calendar.md) |
| Card | 标准 | shadcn card | [Card.md](Card.md) |
| Carousel | 标准 | shadcn carousel | [Carousel.md](Carousel.md) |
| Chart | 标准 | shadcn chart | [Chart.md](Chart.md) |
| Checkbox | 标准 | shadcn checkbox | [Checkbox.md](Checkbox.md) |
| Collapsible | 标准 | shadcn collapsible | [Collapsible.md](Collapsible.md) |
| Combobox | 完整 | shadcn combobox | [Combobox.md](Combobox.md) |
| Command | 标准 | shadcn command | [Command.md](Command.md) |
| ContextMenu | 标准 | shadcn context-menu | [ContextMenu.md](ContextMenu.md) |
| DataTable | 标准 | shadcn data-table | [DataTable.md](DataTable.md) |
| DatePicker | 标准 | shadcn date-picker | [DatePicker.md](DatePicker.md) |
| Dialog | 完整 | shadcn dialog | [Dialog.md](Dialog.md) |
| Direction | 标准 | shadcn direction | [Direction.md](Direction.md) |
| Drawer | 标准 | shadcn drawer | [Drawer.md](Drawer.md) |
| DropdownMenu | 标准 | shadcn dropdown-menu | [DropdownMenu.md](DropdownMenu.md) |
| Empty | 轻量 | shadcn empty | [Empty.md](Empty.md) |
| Field | 标准 | shadcn field | [Field.md](Field.md) |
| Form | 标准 | shadcn form | [Form.md](Form.md) |
| HoverCard | 标准 | shadcn hover-card | [HoverCard.md](HoverCard.md) |
| Input | 标准 | shadcn input | [Input.md](Input.md) |
| InputGroup | 标准 | shadcn input-group | [InputGroup.md](InputGroup.md) |
| InputOtp | 标准 | shadcn input-otp | [InputOtp.md](InputOtp.md) |
| Item | 标准 | shadcn item | [Item.md](Item.md) |
| Kbd | 轻量 | shadcn kbd | [Kbd.md](Kbd.md) |
| Label | 轻量 | shadcn label | [Label.md](Label.md) |
| Menubar | 标准 | shadcn menubar | [Menubar.md](Menubar.md) |
| NativeSelect | 标准 | shadcn native-select | [NativeSelect.md](NativeSelect.md) |
| NavigationMenu | 标准 | shadcn navigation-menu | [NavigationMenu.md](NavigationMenu.md) |
| Pagination | 标准 | shadcn pagination | [Pagination.md](Pagination.md) |
| Popover | 标准 | shadcn popover | [Popover.md](Popover.md) |
| Progress | 轻量 | shadcn progress | [Progress.md](Progress.md) |
| RadioGroup | 标准 | shadcn radio-group | [RadioGroup.md](RadioGroup.md) |
| Resizable | 标准 | shadcn resizable | [Resizable.md](Resizable.md) |
| ScrollArea | 标准 | shadcn scroll-area | [ScrollArea.md](ScrollArea.md) |
| Select | 完整 | shadcn select | [Select.md](Select.md) |
| Separator | 轻量 | shadcn separator | [Separator.md](Separator.md) |
| Sheet | 标准 | shadcn sheet | [Sheet.md](Sheet.md) |
| Sidebar | 完整 | shadcn sidebar | [Sidebar.md](Sidebar.md) |
| Skeleton | 轻量 | shadcn skeleton | [Skeleton.md](Skeleton.md) |
| Slider | 标准 | shadcn slider | [Slider.md](Slider.md) |
| Sonner | 标准 | shadcn sonner | [Sonner.md](Sonner.md) |
| Spinner | 轻量 | shadcn spinner | [Spinner.md](Spinner.md) |
| Switch | 标准 | shadcn switch | [Switch.md](Switch.md) |
| Table | 标准 | shadcn table | [Table.md](Table.md) |
| Tabs | 标准 | shadcn tabs | [Tabs.md](Tabs.md) |
| Textarea | 标准 | shadcn textarea | [Textarea.md](Textarea.md) |
| Toast | 标准 | shadcn toast | [Toast.md](Toast.md) |
| Toaster | 标准 | shadcn toaster | [Toaster.md](Toaster.md) |
| Toggle | 标准 | shadcn toggle | [Toggle.md](Toggle.md) |
| ToggleGroup | 标准 | shadcn toggle-group | [ToggleGroup.md](ToggleGroup.md) |
| Tooltip | 标准 | shadcn tooltip | [Tooltip.md](Tooltip.md) |
| Typography | 轻量 | 排版样式示例 | [Typography.md](Typography.md) |
