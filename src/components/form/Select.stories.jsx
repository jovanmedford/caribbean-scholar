import React from "react"
import { Select } from "./Select"

export default {
  title: "Form/Select",
  component: Select,
}

const Template = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Level:",
  placeholder: "-Select-",
  options: ["First", "Second", "Third"],
}

export const Error = Template.bind({})
Error.args = {
  label: "Level:",
  placeholder: "-Select-",
  options: ["First", "Second", "Third"],
  errorMessage: "Choose an option",
}
