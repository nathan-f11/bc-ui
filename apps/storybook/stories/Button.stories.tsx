import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@ray/ui";

const meta = {
  title: "Primitives/Button",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Button>Button</Button>),
};
