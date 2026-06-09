import type { Meta, StoryObj } from "@storybook/react";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@ray/ui";

const meta = {
  title: "Navigation/NavigationMenu",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Item</NavigationMenuTrigger><NavigationMenuContent><div className="p-4">Content</div></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>),
};
