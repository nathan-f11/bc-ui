import type { Meta, StoryObj } from "@storybook/react";

import { Field, FieldLabel, Input } from "@ray/ui";

const meta = {
  title: "Forms/Field",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Field><FieldLabel>Name</FieldLabel><Input placeholder="Enter name" /></Field>),
};
