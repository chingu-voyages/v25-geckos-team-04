import { useEffect } from 'react'

function CurrentWeatherByCity() {
  const cityID = null
  const apiKey = 'be56ce65affba360fcfb08d130f572b1'

  // useReducer state

  let lat: unknown
  let lon: unknown

  function success(position: {
    coords: { latitude: unknown; longitude: unknown }
  }) {
    lat = position.coords.latitude
    lon = position.coords.longitude
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(success)
    // eslint-disable-next-line no-console
    console.log(lat, lon)
  }

  useEffect(getCurrentLocation, [lat, lon, success])

  useEffect(() => {
    let apiUrl
    if (!cityID) {
      apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    } else {
      apiUrl = `api.openweathermap.org/data/2.5/weather?id=1819729&appid=${apiKey}` // CityID for Hong Kong (1819729)
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data)
        // eslint-disable-next-line no-console
      })
      .catch(console.error)
  }, [cityID, lat, lon])
}

export default CurrentWeatherByCity
