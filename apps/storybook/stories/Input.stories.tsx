import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@ray/ui";

const meta = {
  title: "Forms/Input",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Input placeholder="Type here" />),
};
