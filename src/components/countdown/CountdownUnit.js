/**@jsx jsx */
import { jsx } from "theme-ui"

export default function ({ number, unit }) {
  return (
    <div role="listitem" sx={unitStyle}>
      <p className="countdown-unit__number">{number}</p>
      <h3>{unit}</h3>
    </div>
  )
}

const unitStyle = {
  p: {
    top: 0,
    fontSize: "3rem",
    display: "inline",
  },

  h3: {
    fontSize: "1rem",
    marginTop: 0,
  },
}
