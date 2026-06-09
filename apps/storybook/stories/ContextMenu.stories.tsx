import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/ContextMenu",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<ContextMenu><ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">Right click</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Profile</ContextMenuItem></ContextMenuContent></ContextMenu>),
};
