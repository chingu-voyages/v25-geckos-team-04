/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { Sidebar } from '../components/Sidebar'
import { SearchSidebar } from '../components/SearchSidebar'

export default function CurrentWeatherByCityContainer() {
  const apiKey = 'be56ce65affba360fcfb08d130f572b1'

  const [citySearchString, setCitySearchString] = useState('')
  const [citySearchResults, setCitySearchResults] = useState([])
  const [showSearchSidebar, setShowSearchSidebar] = useState(false)

  function toggleSearchSidebar() {
    setShowSearchSidebar(!showSearchSidebar)
  }

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${citySearchString}&units=metric&appid=${apiKey}`

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCitySearchResults(data)
      })
      .catch(console.error)
  }, [citySearchString])

  useEffect(() => {
    let lat
    let lon

    function success(pos: { coords: { latitude: number; longitude: number } }) {
      const crd = pos.coords

      console.log('Your current position is:')
      console.log(`Latitude : ${crd.latitude}`)
      console.log(`Longitude: ${crd.longitude}`)

      lat = crd.latitude
      lon = crd.longitude

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(console.error)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <>
      {showSearchSidebar ? null : (
        <Sidebar showSearchSidebar={toggleSearchSidebar} />
      )}
      {showSearchSidebar ? (
        <SearchSidebar
          citySearchString={citySearchString}
          setCitySearchString={setCitySearchString}
          hideSearchSidebar={toggleSearchSidebar}
        />
      ) : null}
    </>
  )
}
