import React from "react"

import { Countdown } from "./Countdown"

export default {
  title: "Countdown/Countdown",
  component: Countdown,
}

const Template = args => <Countdown {...args} />

export const Default = Template.bind({})
Default.args = {
  dateString: "2022-11-02 15:40:30",
}
