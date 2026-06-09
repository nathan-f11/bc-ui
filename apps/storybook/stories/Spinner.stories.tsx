import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@ray/ui";

const meta = {
  title: "Feedback/Spinner",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Spinner />),
};
