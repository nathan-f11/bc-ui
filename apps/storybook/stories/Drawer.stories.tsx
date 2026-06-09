import type { Meta, StoryObj } from "@storybook/react";

import { Button, Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/Drawer",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Drawer><DrawerTrigger asChild><Button variant="outline">Open</Button></DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Drawer</DrawerTitle></DrawerHeader></DrawerContent></Drawer>),
};
