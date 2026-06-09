import type { Meta, StoryObj } from "@storybook/react";

import { Button, toast } from "@ray/ui";

const meta = {
  title: "Feedback/Toast",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast({ title: "Scheduled" })}>Show Toast</Button>
  ),
};
