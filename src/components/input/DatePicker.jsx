/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { errorBorderStyle, inputStyle, errorStyle } from "./inputStyle"

export const DatePicker = ({
  name,
  value,
  label,
  errorMessage,
  handleChange,
}) => (
  <Fragment>
    <label sx={labelStyle} htmlFor={name}>
      {label}
    </label>
    <input
      sx={!errorMessage ? inputStyle : errorBorderStyle}
      type="date"
      onChange={handleChange}
      value={value}
    />
    <span sx={errorStyle}>{errorMessage}</span>
  </Fragment>
)

DatePicker.defaultProps = {
  name: "date",
  errorMessage: "",
}

DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
}

const labelStyle = { color: "text" }
