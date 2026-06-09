import type { Meta, StoryObj } from "@storybook/react";

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@ray/ui";

const meta = {
  title: "Navigation/Menubar",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem></MenubarContent></MenubarMenu></Menubar>),
};
