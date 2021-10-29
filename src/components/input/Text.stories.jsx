import React from "react"

import { Text } from "./Text"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

const Template = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Form",
}

export const Error = Template.bind({})
Error.args = {
  errorMessage: "Field Empty",
  label: "Subject Name",
}
