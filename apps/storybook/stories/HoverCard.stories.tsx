import type { Meta, StoryObj } from "@storybook/react";

import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@ray/ui";

const meta = {
  title: "Overlays/HoverCard",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<HoverCard><HoverCardTrigger asChild><Button variant="link">Hover</Button></HoverCardTrigger><HoverCardContent>Details</HoverCardContent></HoverCard>),
};
