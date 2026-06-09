import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@ray/ui";

const meta = {
  title: "Forms/Label",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Label htmlFor="name">Name</Label>),
};
