import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@ray/ui";

const meta = {
  title: "Advanced/Calendar",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Calendar mode="single" className="rounded-md border" />),
};
