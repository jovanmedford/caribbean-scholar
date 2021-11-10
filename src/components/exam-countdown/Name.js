/**@jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import remCalc from "../../utils/remCalc"
//components

export default function ({ name, handleClick }) {
  return (
    <div>
      <h1
        onClick={handleClick}
        sx={{
          margin: 0,
          fontSize: remCalc(39),
        }}
      >
        {name} <FontAwesomeIcon icon={faCaretDown} alt="change subject" />
      </h1>
    </div>
  )
}
