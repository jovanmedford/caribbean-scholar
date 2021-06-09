/**@jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc';
import CountdownService from './CountdownService'

export default function ({ isOpen, subjectDateTime }) {
  let message;
  const now = new Date();
 

  if(subjectDateTime == null) {
    message = <span>No exam</span>
  } else if((subjectDateTime - now) < 0) {
    message = <span>This exam has past.</span>
  } 

  return (
    <section sx={{
      position:'absolute',
      zIndex: '100',
      width: "100%",
      maxWidth: remCalc(400),
      height: remCalc(300),
      backgroundColor: '#28866C',
      display: isOpen ? 'block' : 'none',
    }}>
      { message ? message : <CountdownService subjectDateTime={subjectDateTime}/> }
    </section>
  )
}