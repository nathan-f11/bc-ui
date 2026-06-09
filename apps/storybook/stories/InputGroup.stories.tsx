import type { Meta, StoryObj } from "@storybook/react";

import { InputGroup, InputGroupInput } from "@ray/ui";

const meta = {
  title: "Forms/InputGroup",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<InputGroup><InputGroupInput placeholder="Search" /></InputGroup>),
};
