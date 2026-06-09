import type { Meta, StoryObj } from "@storybook/react";

import { Button, Popover, PopoverContent, PopoverTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/Popover",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Popover><PopoverTrigger asChild><Button variant="outline">Open</Button></PopoverTrigger><PopoverContent>Popover content</PopoverContent></Popover>),
};
