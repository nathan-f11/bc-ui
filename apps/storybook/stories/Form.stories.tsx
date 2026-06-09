import type { Meta, StoryObj } from "@storybook/react";

import { Input, Label } from "@ray/ui";

const meta = {
  title: "Forms/Form",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" placeholder="email@example.com" /></div>),
};
