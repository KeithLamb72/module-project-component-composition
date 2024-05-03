import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
 const [apod, setApod] = useState()

 useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    //fetchPhoto()
    setApod({
      
        "date": "2024-05-03",
        "explanation": "A mere 280 light-years from Earth, tidally locked, Jupiter-sized exoplanet WASP-43b orbits its parent star once every 0.8 Earth days. That puts it about 2 million kilometers (less than 1/25th the orbital distance of Mercury) from a small, cool sun. Still, on a dayside always facing its parent star, temperatures approach a torrid 2,500 degrees F as measured at infrared wavelengths by the MIRI instrument on board the James Webb Space Telescope. In this illustration of the hot exoplanet's orbit, We...",
        "hdurl": "https://apod.nasa.gov/apod/image/2405/STScI-WASP43b_temperature.png",
        "media_type": "image",
        "service_version": "v1",
        "title": "Temperatures on Exoplanet WASP-43b",
        "url": "https://apod.nasa.gov/apod/image/2405/STScI-WASP43b_temperature.png"
      
    })
 }, [])

 if(!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
