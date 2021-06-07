/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState,useEffect } from 'react'
import CountdownUnit from './CountdownUnit'

export default function ({ isOpen, subjectDateTime }) {

  const calculateCountdown = function(examDateTime) {
    const millisecond = 1;
    const second = 1000 * millisecond;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const units = [day,hour,minute,second];

    const now = new Date();
    let timeDifference = examDateTime - now;

    return units.map(unit => {
      const measurement = Math.floor(timeDifference / unit)
      timeDifference = timeDifference - (measurement * unit);
      return measurement;
    });
  }

 let [timeDifference, setTimeDifference] = useState(calculateCountdown(subjectDateTime))
  

  //calulate time difference in milliseconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeDifference(calculateCountdown(subjectDateTime));
    },1000);
    return () => clearTimeout(timer);
  });

  //JSX
  const finishedMessage = <span>This exam has past.</span>
  const [days,hours,minutes,seconds] = timeDifference;
  const countdownClock = 
      <div sx ={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
      <CountdownUnit number={days} unit="Days"/>
      <CountdownUnit number={hours} unit="Hours"/>
      <CountdownUnit number={minutes} unit="Minutes"/>
      <CountdownUnit number={seconds} unit="Seconds"/>     
      </div>
  return (
    <section sx={{
      position:'absolute',
      width: "100%",
      height: "100%",
      backgroundColor: 'background',
      display: isOpen ? 'block' : 'none',
    }}>
      { countdownClock }
    </section>
  )
}