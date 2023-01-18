import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../../utils/client"
import PlaceSummary from './PlaceSummary'
import PlaceHours from './PlaceHours'

import './Place.css'

function Place() {
  const [response, setResponse] = useState({data: { openingHours: { days: {}}}})
  const params = useParams()

  useEffect(() => {
    client.get(`/places/${params.id}`)
      .then(setResponse)
  }, [params.id])

  return (
    <>
    { response.error ?
      <p>No such place!</p> :
      <div className="container">
        <PlaceSummary name={response.data.name} address={response.data.address} />
        <PlaceHours openingHours={response.data.openingHours}/>
      </div>
    }
    </>
  )
}

export default Place
