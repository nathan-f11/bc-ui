import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "@ray/ui";

const meta = {
  title: "Primitives/ButtonGroup",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<ButtonGroup><Button>One</Button><Button>Two</Button></ButtonGroup>),
};
