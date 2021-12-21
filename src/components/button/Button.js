import React from "react"
import { BaseButton } from "./BaseButton"

export const Button = props => {
  return (
    {
      primary: <BaseButton backgroundColor="primary" {...props} />,
      secondary: <BaseButton border {...props} />,
      delete: <BaseButton backgroundColor="red" {...props} />,
    }[props.type] || <BaseButton backgroundColor="primary" {...props} />
  )
}

Button.defaultProps = {
  type: "primary",
}
