import React from "react"
import { requiredRule, dateRule } from "./validationRules"
import { Form } from "./Form.jsx"

export default {
  title: "Form/Form",
  component: Form,
}

const Template = args => <Form {...args} />

export const Default = Template.bind({})
Default.args = {
  formConfig: [
    {
      name: "name",
      label: "Name",
      type: "text",
      validationRules: [requiredRule],
    },
    {
      name: "level",
      label: "Level",
      type: "select",
      options: ["CSEC", "CAPE"],
      validationRules: [requiredRule],
    },
    {
      name: "paperNumber",
      label: "Paper Number",
      type: "select",
      options: ["1", "2", "3/2"],
      validationRules: [requiredRule],
    },
    {
      name: "date",
      label: "Exam Date",
      type: "date",
      validationRules: [dateRule],
    },
  ],
}
