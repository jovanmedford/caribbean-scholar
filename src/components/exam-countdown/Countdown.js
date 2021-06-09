/**@jsx jsx */
import { jsx } from 'theme-ui'
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
      width: "100%",
      height: "100%",
      backgroundColor: 'background',
      display: isOpen ? 'block' : 'none',
    }}>
      { message ? message : <CountdownService subjectDateTime={subjectDateTime}/> }
    </section>
  )
}