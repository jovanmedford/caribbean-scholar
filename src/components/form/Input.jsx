import React from "react"
import { DatePicker } from "./DatePicker"
import { Select } from "./Select"
import { Text } from "./Text"
import PropTypes from "prop-types"
import { Combobox } from "./Combobox"

export const Input = function (props) {
  return (
    {
      date: <DatePicker {...props} />,
      select: <Select {...props} />,
      autocomplete: <Combobox {...props} />,
    }[props.type] || <Text {...props} />
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
  type: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "select",
    "date",
    "autocomplete",
  ]),
  className: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  options: PropTypes.array,
}
