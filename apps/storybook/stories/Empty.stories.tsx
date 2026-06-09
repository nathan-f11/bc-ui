import type { Meta, StoryObj } from "@storybook/react";

import { Empty, EmptyDescription, EmptyTitle } from "@ray/ui";

const meta = {
  title: "Data Display/Empty",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Empty><EmptyTitle>No data</EmptyTitle><EmptyDescription>Nothing to show.</EmptyDescription></Empty>),
};
