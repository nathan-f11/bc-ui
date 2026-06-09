import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, Label } from "@ray/ui";

const meta = {
  title: "Forms/Checkbox",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<div className="flex items-center gap-2"><Checkbox id="c1" /><Label htmlFor="c1">Accept</Label></div>),
};
