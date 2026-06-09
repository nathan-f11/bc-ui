import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "@ray/ui";

const meta = {
  title: "Layout/AspectRatio",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<AspectRatio ratio={16 / 9} className="bg-muted w-[200px]"><div className="flex h-full items-center justify-center text-sm">16:9</div></AspectRatio>),
};
