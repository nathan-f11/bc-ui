import type { Meta, StoryObj } from "@storybook/react";

import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/Sheet",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Sheet><SheetTrigger asChild><Button variant="outline">Open</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Sheet</SheetTitle></SheetHeader></SheetContent></Sheet>),
};
