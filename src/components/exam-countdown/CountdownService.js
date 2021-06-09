/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState,useEffect } from 'react'
import calculateCountdown from '../../utils/calculateCountdown'
import CountdownUnit from './CountdownUnit'

export default function({subjectDateTime}) {
  let [timeDifference, setTimeDifference] = useState(calculateCountdown(subjectDateTime))

   //Decrement Countdown 
   useEffect(() => {
    const timer = setTimeout(() => {
      setTimeDifference(calculateCountdown(subjectDateTime));
    },1000);
    return () => clearTimeout(timer);
  });

  //Deconstruct timeDifference
  const [days,hours,minutes,seconds] = timeDifference;
  return(
      <div sx ={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
      <CountdownUnit number={days} unit="Days"/>
      <CountdownUnit number={hours} unit="Hours"/>
      <CountdownUnit number={minutes} unit="Minutes"/>
      <CountdownUnit number={seconds} unit="Seconds"/>     
      </div>
  );
}