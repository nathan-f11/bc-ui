import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@ray/ui";

const meta = {
  title: "Feedback/Progress",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Progress value={60} className="w-[200px]" />),
};
