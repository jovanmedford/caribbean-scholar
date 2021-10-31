import React from "react"

import { Input } from "./Input"

export default {
  title: "Form/Input",
  component: Input,
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Form",
  type: "text",
}

export const Select = Template.bind({})
Select.args = {
  label: "Form",
  type: "select",
  options: ["first", "second", "third"],
}

export const Date = Template.bind({})
Date.args = {
  label: "Date",
  type: "date",
}
