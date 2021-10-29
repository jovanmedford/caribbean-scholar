import React from "react"

import { TextInput } from "./TextInput"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/TextInput",
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

const Template = args => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Form",
}

export const Error = Template.bind({})
Error.args = {
  errorMessage: "Field Empty",
  label: "Subject Name",
  onChange: () => console.log("Hi"),
}
