import type { Meta, StoryObj } from "@storybook/react";

import { Label, Switch } from "@ray/ui";

const meta = {
  title: "Forms/Switch",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<div className="flex items-center gap-2"><Switch id="s1" /><Label htmlFor="s1">Airplane mode</Label></div>),
};
