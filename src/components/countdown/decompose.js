export default function (timeDelta) {
  const millisecond = 1
  const second = 1000 * millisecond
  const minute = 60 * second
  const hour = 60 * minute
  const day = 24 * hour
  const units = [day, hour, minute, second]

  return units.map(unit => {
    const measurement = Math.floor(timeDelta / unit)
    timeDelta = timeDelta % unit
    return measurement
  })
}
