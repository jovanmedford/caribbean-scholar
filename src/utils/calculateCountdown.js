export default function(examDateTime) {
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
      timeDifference = timeDifference % unit;
      return measurement;
    });
  }