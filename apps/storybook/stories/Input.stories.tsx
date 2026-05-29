import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@ray/ui";

const meta = {
  title: "Primitives/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Email" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
