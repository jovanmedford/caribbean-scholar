/**@jsx jsx */
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'
import remCalc from '../../utils/remCalc'
export default function({date, time, controls}) {
  return(
  <section sx={{
    position: 'relative',
    zIndex: 1,
    h3: {
      marginBottom: 0,
      fontWeight: 'normal'
    },
    span: {
      margin: remCalc([0,0,24,0]),
      fontSize: '3rem',
    }
  }}>
        <div>
          <h3>Date</h3>
          <motion.span 
            animate={controls}
          >
            {date}
          </motion.span>
        </div>

        <div sx>
          <h3>Time</h3>
          <motion.span
          animate={controls}
          >{time}</motion.span>
        </div>
  </section>
  )
}