import type { Meta, StoryObj } from "@storybook/react";
import { toast as sonnerToast } from "sonner";

import { Button, Toaster } from "@ray/ui";

const meta = {
  title: "Feedback/Sonner",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Button onClick={() => sonnerToast("Event created")}>Show toast</Button>
      <Toaster />
    </>
  ),
};
