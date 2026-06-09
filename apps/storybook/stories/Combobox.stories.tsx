import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "@ray/ui";

const meta = {
  title: "Forms/Combobox",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Combobox />),
};
