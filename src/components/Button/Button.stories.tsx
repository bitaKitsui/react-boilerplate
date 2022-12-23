import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error"],
    },
    outlined: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  onClick: action("clicked"),
  color: "primary",
  outlined: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  onClick: action("clicked"),
  color: "secondary",
  outlined: false,
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  children: "Error Button",
  onClick: action("clicked"),
  color: "error",
  outlined: false,
  disabled: false,
};
