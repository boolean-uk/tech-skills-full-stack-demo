import './PlaceHours.css'

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
]

function PlaceHours({openingHours}) {
  const daysByHours = {}
  const hours = []

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

  Object.keys(daysByHours).forEach(times => {
    const dayGroup = daysByHours[times]
    const item = {}
    item.group = dayGroup.length > 1 ? `${dayGroup[0]} - ${dayGroup[dayGroup.length-1]}` : dayGroup[0]
    item.times = times
    hours.push(item)
  })

  return (
    <section>

      <h1>Opening Hours</h1>
      {hours.map((item, index) => {
        return (
          <div className="container hours-container" key={index}>
            <p>{item.group}</p>
            <div>{item.times.split('\n').map((time, index) => <p key={index}>{time}</p>)}</div>
          </div>
        )
      })}
    </section>
  )
}

export default PlaceHours
