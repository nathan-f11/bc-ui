import type { Meta, StoryObj } from "@storybook/react";
import { Bar, BarChart } from "recharts";

import { ChartContainer } from "@ray/ui";

const meta = {
  title: "Advanced/Chart",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ChartContainer
      config={{
        desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
      }}
      className="h-[200px] w-full"
    >
      <BarChart data={[{ month: "Jan", desktop: 186 }]}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </ChartContainer>
  ),
};
