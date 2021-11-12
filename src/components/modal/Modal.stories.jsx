import React from "react"
import { Modal } from "./Modal"

export default {
  title: "Modal/Modal",
  component: "Modal",
}

const Template = args => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  show: true,
  heading: "Example",
  children: <p>This is an example modal</p>,
}
