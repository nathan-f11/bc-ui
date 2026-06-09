import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@ray/ui";

const meta = {
  title: "Data Display/ScrollArea",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<ScrollArea className="h-[100px] w-[200px] rounded-md border p-2"><div className="space-y-2">{Array.from({ length: 10 }).map((_, i) => <p key={i}>Line {i + 1}</p>)}</div></ScrollArea>),
};
