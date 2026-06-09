import type { Meta, StoryObj } from "@storybook/react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@ray/ui";

const meta = {
  title: "Advanced/Carousel",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Carousel className="w-full max-w-xs"><CarouselContent><CarouselItem>1</CarouselItem><CarouselItem>2</CarouselItem></CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>),
};
