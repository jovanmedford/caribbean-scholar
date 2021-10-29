import React from "react"
import { DatePicker } from "./DatePicker"
import { Select } from "./Select"
import { Text } from "./Text"
import PropTypes from "prop-types"

export const Input = function (props) {
  return (
    {
      date: <DatePicker type={props.type} props={props} />,
      select: <Select type={props.type} props={props} />,
    }[props.type] || <Text type={props.type} props={props} />
  )
}

Input.defaultProps = {
  label: "",
  name: "",
  type: "text",
  errorMessage: "",
  placeholder: "",
  value: "",
  className: "",
  errorMessage: "",
  options: [],
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password", "select", "date"]),
  className: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  options: PropTypes.array,
}
