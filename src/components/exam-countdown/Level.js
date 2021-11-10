/** @jsx jsx */
import { jsx } from "theme-ui"
import remCalc from "../../utils/remCalc"

/**
 * Select menu that allows user to change subject level
 * @param {function} handleChange pass up the change of state when option is selected
 * @returns {JSX} Select element
 */
export default function ({ handleChange, level }) {
  return (
    <label for="level">
      <select id="level" value={level} onChange={handleChange} sx={selectStyle}>
        <option value="csec">CSEC</option>
        <option value="cape">CAPE</option>
      </select>
    </label>
  )
}

const selectStyle = {
  background: "none",
  border: "none",
  display: "inline",
  position: "relative",
  color: "text",
  fontSize: remCalc(25),
  variant: "menu",

  "*": {
    backgroundColor: "background",
    fontSize: remCalc(16),
  },
}
