/**@jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'
export default function({date,time}) {
  return(
  <section>
        <div sx={{
          span: {
            marginBottom: 0,
          },
          h1: {
            margin: remCalc([0,0,24,0]) 
          }
        }}>
          <span>Date</span>
          <h1>{date}</h1>
        </div>

        <div sx={{
          span: {
            marginBottom: 0,
          },
          h1: {
            margin: remCalc([0,0,24,0]) 
          }
        }}>
          <span>Time</span>
          <h1>{time}</h1>
        </div>
  </section>
  )
}