/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { errorBorderStyle, inputStyle, errorStyle } from "./inputStyle"

export const Select = ({
  key,
  name,
  label,
  value,
  placeholder,
  form,
  options,
  errorMessage,
  handleChange,
}) => {
  const optionList = options.map(option => (
    <option key={option} value={option.toLowerCase()}>
      {option}
    </option>
  ))
  return (
    <Fragment>
      <label sx={{ color: "text", display: "block" }} htmlFor={name}>
        {label}
      </label>
      <select
        key={key}
        name={name}
        id={name}
        placeholder={placeholder}
        form={form}
        value={value}
        onChange={handleChange}
        sx={!errorMessage ? inputStyle : errorBorderStyle}
      >
        <option value="" disabled selected hidden>
          -Select-
        </option>
        {optionList}
      </select>
      <span sx={errorStyle}>{errorMessage}</span>
    </Fragment>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string,
  form: PropTypes.element,
}

Select.defaultProps = {
  placeholder: "-Select-",
  options: ["first", "second"],
}
