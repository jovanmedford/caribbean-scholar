/**@jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import decompose from "./decompose"
import CountdownUnit from "./CountdownUnit"

/***
 * Countdown to given date and time
 * @param {String} dateString - date time of format "yyyy-mm-dd hh:mm:ss"
 */
export const Countdown = ({ dateString, className }) => {
  const datetime = new Date(dateString)
  const [timeDelta, setTimeDelta] = useState(datetime - new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeDelta(datetime - new Date())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const [days, hours, minutes, seconds] = decompose(timeDelta)
  return (
    <div className={className}>
      {timeDelta > 0 ? (
        <ul sx={listStyle}>
          <CountdownUnit key="Days" number={days} unit="Days" />
          <CountdownUnit key="Hours" number={hours} unit="Hours" />
          <CountdownUnit key="Minutes" number={minutes} unit="Minutes" />
          <CountdownUnit key="Seconds" number={seconds} unit="Seconds" />
        </ul>
      ) : (
        <span sx={errorMessageStyle}>Time has passed</span>
      )}
    </div>
  )
}

const listStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  position: "relative",
  top: "50%",
}

const errorMessageStyle = {
  position: "relative",
  top: "35%",
  fontSize: 3,
}
