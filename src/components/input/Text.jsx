/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { inputStyle, errorBorderStyle, errorStyle } from "./inputStyle"
export const Text = ({
  label,
  name,
  type,
  placeholder,
  handleChange,
  className,
  value,
  errorMessage,
  children,
}) => {
  return (
    <Fragment>
      <label sx={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input
        sx={!errorMessage ? inputStyle : errorBorderStyle}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
      ></input>
      <span sx={errorStyle}>{errorMessage}</span>
    </Fragment>
  )
}

Text.defaultProps = {
  label: "",
  name: "",
  type: "text",
  errorMessage: "",
  placeholder: "",
  value: "",
  className: "",
  errorMessage: "",
}

Text.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func,
}

const labelStyle = { color: "text" }
