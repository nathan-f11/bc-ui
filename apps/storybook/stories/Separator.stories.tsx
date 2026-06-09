import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@ray/ui";

const meta = {
  title: "Navigation/Separator",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<div className="space-y-1"><p>Above</p><Separator /><p>Below</p></div>),
};
