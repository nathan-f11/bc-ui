import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@ray/ui";

const meta = {
  title: "Data Display/Badge",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Badge>Badge</Badge>),
};
