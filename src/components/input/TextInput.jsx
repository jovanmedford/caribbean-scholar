/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { inputStyle, errorBorderStyle, errorStyle } from "./inputStyle"
export const TextInput = ({
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
        value={value}
        className={className}
      ></input>
      <span sx={errorStyle}>{errorMessage}</span>
    </Fragment>
  )
}

TextInput.defaultProps = {
  type: "text",
  className: "",
  errorMessage: "",
}

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
}

const labelStyle = { color: "text" }
