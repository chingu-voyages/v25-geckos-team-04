import React, { useEffect } from 'react'
import { openWeatherApi } from '../api'

export const CurrentDailyWeatherContainer = () => {
  const getCurrentCityByCoords = async (coords: {
    lon: number
    lat: number
  }) => {
    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          lat: coords.lat,
          lon: coords.lon,
          units: 'metric',
        },
      })

      console.log(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    let lat
    let lon

    function success(pos: { coords: { latitude: number; longitude: number } }) {
      const crd = pos.coords

      lat = crd.latitude
      lon = crd.longitude

      if (lat && lon) {
        getCurrentCityByCoords({ lat, lon })
      }
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return <div>RENDER Function here</div>
}
