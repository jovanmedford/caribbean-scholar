import React from "react"

import { Button } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  label: "Button",
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary",
  label: "Button",
  disabled: false,
}
