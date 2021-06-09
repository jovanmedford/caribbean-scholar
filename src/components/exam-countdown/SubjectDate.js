/**@jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import remCalc from '../../utils/remCalc'
export default function({date,time}) {
  const growIn = keyframes`
  from {
    transform: translateY(30px);
    opacity:0;
  }

  to {
    transform: translateY(0px);
    opacity: 100%
  }
`
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
      animationName: growIn,
      animationDuration: '1s' 
    }
  }}>
        <div>
          <h3>Date</h3>
          <span>{date}</span>
        </div>

        <div sx>
          <h3>Time</h3>
          <span>{time}</span>
        </div>
  </section>
  )
}