import type { Meta, StoryObj } from "@storybook/react";

import { Kbd } from "@ray/ui";

const meta = {
  title: "Data Display/Kbd",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Kbd>⌘ K</Kbd>),
};
