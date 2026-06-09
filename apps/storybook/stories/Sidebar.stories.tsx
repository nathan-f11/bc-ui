import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@ray/ui";

const meta = {
  title: "Layout/Sidebar",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<SidebarProvider><Sidebar><SidebarContent><SidebarGroup><SidebarGroupLabel>App</SidebarGroupLabel><SidebarGroupContent><SidebarMenu><SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><main className="p-4">Content</main></SidebarProvider>),
};
