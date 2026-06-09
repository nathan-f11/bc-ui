import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertDescription, AlertTitle } from "@ray/ui";

const meta = {
  title: "Feedback/Alert",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Alert><AlertTitle>Heads up!</AlertTitle><AlertDescription>Alert message.</AlertDescription></Alert>),
};
