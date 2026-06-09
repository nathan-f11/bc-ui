import type { Meta, StoryObj } from "@storybook/react";

import { Label, RadioGroup, RadioGroupItem } from "@ray/ui";

const meta = {
  title: "Forms/RadioGroup",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<RadioGroup defaultValue="a"><div className="flex items-center gap-2"><RadioGroupItem value="a" id="a" /><Label htmlFor="a">A</Label></div></RadioGroup>),
};
