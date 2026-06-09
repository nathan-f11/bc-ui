import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ray/ui";

const meta = {
  title: "Data Display/Table",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Alice</TableCell></TableRow></TableBody></Table>),
};
