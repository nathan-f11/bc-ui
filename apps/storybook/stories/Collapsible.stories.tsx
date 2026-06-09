import type { Meta, StoryObj } from "@storybook/react";

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ray/ui";

const meta = {
  title: "Data Display/Collapsible",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Collapsible><CollapsibleTrigger asChild><Button variant="ghost">Toggle</Button></CollapsibleTrigger><CollapsibleContent>Hidden content</CollapsibleContent></Collapsible>),
};
