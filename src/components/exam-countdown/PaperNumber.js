/** @jsx jsx */
import { jsx } from "theme-ui"
import { keyframes } from "@emotion/core"

import remCalc from "../../utils/remCalc"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

export default function ({ index, handleClick, exams }) {
  let paperNumber = 1
  const length = exams.length || 0
  if (Array.isArray(exams) && exams.length) {
    paperNumber = exams[index].paperNumber
  }

  return (
    <div sx={allStyle}>
      {index > 0 ? (
        <button onClick={event => handleClick(event, "previous", length)}>
          <FontAwesomeIcon icon={faAngleLeft} alt="previous exam paper" />
        </button>
      ) : (
        false
      )}

      <span>Paper {paperNumber}</span>

      {index < length - 1 ? (
        <button onClick={event => handleClick(event, "next", length)}>
          <FontAwesomeIcon icon={faAngleRight} alt="next exam paper" />
        </button>
      ) : (
        false
      )}
    </div>
  )
}

const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -10px, 0);
}

70% {
  transform: translate3d(0, -5px, 0);
}

90% {
  transform: translate3d(0, 0px,0);
}
`

const allStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: remCalc(24),

  span: {
    fontSize: remCalc(25),
    margin: "0 0.5rem",
  },

  button: {
    background: "none",
    border: "none",
    position: "relative",

    ":hover": {
      animationName: bounce,
      animationDuration: "1s",
    },
  },

  svg: {
    fontSize: "2rem",
    color: "text",
  },
}


