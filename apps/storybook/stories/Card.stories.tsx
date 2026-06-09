import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ray/ui";

const meta = {
  title: "Data Display/Card",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Card className="w-[300px]"><CardHeader><CardTitle>Card</CardTitle><CardDescription>Description</CardDescription></CardHeader><CardContent>Content</CardContent></Card>),
};
