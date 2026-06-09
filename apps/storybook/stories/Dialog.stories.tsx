import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/Dialog",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Dialog><DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Dialog</DialogTitle><DialogDescription>Dialog content.</DialogDescription></DialogHeader></DialogContent></Dialog>),
};
