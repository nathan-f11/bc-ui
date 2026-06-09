import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "@ray/ui";

const meta = {
  title: "Primitives/Toggle",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Toggle aria-label="Toggle bold">B</Toggle>),
};
