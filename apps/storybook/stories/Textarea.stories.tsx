import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@ray/ui";

const meta = {
  title: "Forms/Textarea",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Textarea placeholder="Type message" />),
};
