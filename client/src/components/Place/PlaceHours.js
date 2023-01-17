import './place-hours.css'

function PlaceHours({openingHours}) {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ]
  const daysByHours = {}
  days.forEach(day => {

    let dayHours
    if (!openingHours.days[day]) {
      dayHours = "closed"
    } else {
      dayHours = openingHours.days[day].map(item => `${item.start} - ${item.end}`).join('\n')
    }

    if (!daysByHours[dayHours]) daysByHours[dayHours] = []

    daysByHours[dayHours].push(day)
  })

  const hours = []
  Object.keys(daysByHours).map(times => {
    const dayGroup = daysByHours[times]
    if (dayGroup.length > 1) {
      const item = {}
      item.group = `${dayGroup[0]} - ${dayGroup[dayGroup.length-1]}`
      item.times = times
      hours.push(item)
    } else {
      const item = {}
      item.group = dayGroup[0]
      item.times = times
      hours.push(item)
    }
  })
  return (
    <div>
      {hours.map(item => {
        return <div className="hours-container"><p>{item.group}</p><p>{item.times}</p></div>
      })}
    </div>
  )
}

export default PlaceHours
