import type { Meta, StoryObj } from "@storybook/react";

import { Item, ItemDescription, ItemTitle } from "@ray/ui";

const meta = {
  title: "Data Display/Item",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Item><ItemTitle>Item title</ItemTitle><ItemDescription>Item description</ItemDescription></Item>),
};
