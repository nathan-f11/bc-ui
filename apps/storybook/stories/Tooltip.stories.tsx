import type { Meta, StoryObj } from "@storybook/react";

import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/Tooltip",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger><TooltipContent>Tooltip</TooltipContent></Tooltip></TooltipProvider>),
};
