import type { Meta, StoryObj } from "@storybook/react";

import { DataTable } from "@ray/ui";

const meta = {
  title: "Data Display/DataTable",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<DataTable />),
};
