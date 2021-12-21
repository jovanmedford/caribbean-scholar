export default function(examTimes) {
  return examTimes.map(examTime => {
    if(examTime == null) {
      return {
        dateTime: null,
        date: null,
        time: null
      }
    } else {
      return {
        dateTime: examTime,
        date: examTime
                .toLocaleString('default', {month: 'long', day: 'numeric'}),
        time: examTime
                .toLocaleString('default', {hour: 'numeric', dayPeriod: 'long'})
      }
    }
  })
}