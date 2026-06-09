import type { Meta, StoryObj } from "@storybook/react";

import { DirectionProvider } from "@ray/ui";

const meta = {
  title: "Layout/Direction",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<DirectionProvider direction="ltr"><p dir="ltr">LTR content</p></DirectionProvider>),
};
