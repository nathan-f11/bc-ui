import type { Meta, StoryObj } from "@storybook/react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@ray/ui";

const meta = {
  title: "Layout/Resizable",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<ResizablePanelGroup direction="horizontal" className="min-h-[120px] max-w-md rounded-lg border"><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-2">A</div></ResizablePanel><ResizableHandle /><ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-2">B</div></ResizablePanel></ResizablePanelGroup>),
};
