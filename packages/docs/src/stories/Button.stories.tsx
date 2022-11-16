import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@don-ui/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Comprar agora",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};
