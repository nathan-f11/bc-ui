import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback } from "@ray/ui";

const meta = {
  title: "Data Display/Avatar",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>),
};
