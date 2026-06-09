import type { Meta, StoryObj } from "@storybook/react";

import { NativeSelect } from "@ray/ui";

const meta = {
  title: "Forms/NativeSelect",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<NativeSelect><option value="">Select</option><option value="a">A</option></NativeSelect>),
};
