import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import client from "../../utils/client"
import PlaceHours from './PlaceHours'
import './place.css'

function Place() {
  const [response, setResponse] = useState({ data: { openingHours: { days: {}}}})

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
        <section>
          <h1>{response.data.name}</h1>
          <h2>{response.data.address}</h2>
        </section>
        <section>
          <h1>Opening Hours</h1>
          { response.data.openingHours ?
            <PlaceHours openingHours={response.data.openingHours}/> :
            <></>
          }
        </section>
      </div>
    }
    </>
  )
}

export default Place
