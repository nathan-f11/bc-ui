import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@ray/ui";

const meta = {
  title: "Forms/DatePicker",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<DatePicker />),
};
