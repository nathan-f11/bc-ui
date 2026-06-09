import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@ray/ui";

const meta = {
  title: "Feedback/Skeleton",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Skeleton className="h-4 w-[200px]" />),
};
