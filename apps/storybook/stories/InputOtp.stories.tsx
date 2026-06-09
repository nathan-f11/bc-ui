import type { Meta, StoryObj } from "@storybook/react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@ray/ui";

const meta = {
  title: "Forms/InputOtp",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<InputOTP maxLength={6}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /></InputOTPGroup></InputOTP>),
};
