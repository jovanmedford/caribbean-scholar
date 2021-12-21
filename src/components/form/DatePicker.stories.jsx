import React from "react"

import { DatePicker } from "./DatePicker"

export default {
  title: "Form/DatePicker",
  component: DatePicker,
}

const Template = args => <DatePicker {...args} />
export const Default = Template.bind({
  label: "Date:",
})

export const Error = Template.bind({})
Error.args = {
  errorMessage: "Date has passed!",
}
