import type { Meta, StoryObj } from "@storybook/react";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@ray/ui";

const meta = {
  title: "Overlays/Command",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Command className="rounded-lg border shadow-md"><CommandInput placeholder="Search..." /><CommandList><CommandEmpty>No results.</CommandEmpty><CommandGroup><CommandItem>Item</CommandItem></CommandGroup></CommandList></Command>),
};
