/**@jsx jsx */
import { jsx } from "theme-ui"
import remCalc from "../../utils/remCalc"

export default function ({ handleClick, name }) {
  return (
    <li onClick={handleClick} sx={itemStyle}>
      {name}
    </li>
  )
}

const itemStyle = {
  fontSize: remCalc(25),
  ":hover": {
    cursor: "pointer",
  },
}
