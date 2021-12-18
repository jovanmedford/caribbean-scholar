/**@jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import remCalc from "../../utils/remCalc"
export default function ({ dateString, controls }) {
  const datetime = new Date(dateString)
  const time = datetime.toLocaleTimeString("en", {
    timeZoneName: "short",
    hour: "numeric",
    minute: "numeric"
  })
  const finalDateString = datetime.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  })
  return (
    <section
      sx={{
        position: "relative",
        zIndex: 1,
        h3: {
          fontSize: 2,
          marginBottom: 0,
          fontWeight: "normal",
        },
        span: {
          margin: remCalc([0, 0, 24, 0]),
          fontSize: "2.4375rem",
        },
      }}
    >
      <div>
        <h3>Date</h3>
        <motion.span animate={controls}>{finalDateString}</motion.span>
      </div>

      <div sx>
        <h3>Time</h3>
        <motion.span animate={controls}>{time}</motion.span>
      </div>
    </section>
  )
}
