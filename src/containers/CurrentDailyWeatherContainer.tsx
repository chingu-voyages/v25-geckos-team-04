import React, { FC, useEffect, useReducer, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  dailyWeatherReducerInitialState,
  dailyWeatherReducer,
} from '../reducers/weather'
import { WeatherActions } from '../actions/weather'

export interface ICoords {
  lon: number
  lat: number
}

interface IInjectedDailyWeatherRenderProps {
  // eslint-disable-next-line
  dailyWeather: {
    name: string
    main: { temp: number }
    weather: { main: string }[]
  }
  isLoading: boolean
  hasError: boolean
  getDailyWeather: (coords: ICoords) => void
}

interface ICurrentDailyWeatherContainer {
  render: (props: IInjectedDailyWeatherRenderProps) => React.ReactElement
}

export const CurrentDailyWeatherContainer: FC<ICurrentDailyWeatherContainer> = ({
  render,
}) => {
  const [weatherState, dispatch] = useReducer(
    dailyWeatherReducer,
    dailyWeatherReducerInitialState,
  )

  const appContext = useContext(AppContext)

  const getDailyWeather = async (coords: ICoords) => {
    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          lat: coords.lat,
          lon: coords.lon,
          units: 'metric',
        },
      })

      dispatch(WeatherActions.setDailyWeather(data))
      dispatch(WeatherActions.setIsLoading(false))
    } catch (e) {
      dispatch(WeatherActions.setIsLoading(false))
      dispatch(WeatherActions.setHasError(true))
    }
  }

  useEffect(() => {
    let lat
    let lon

    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    function success(pos: { coords: { latitude: number; longitude: number } }) {
      const crd = pos.coords

      lat = crd.latitude
      lon = crd.longitude

      if (lat && lon) {
        appContext.setLatLon({ lat, lon })
        getDailyWeather({ lat, lon })
      }
    }

    navigator.geolocation.getCurrentPosition(success)
    // eslint-disable-next-line
  }, [])

  const { dailyWeather, isLoading, hasError } = weatherState

  return render({
    dailyWeather,
    getDailyWeather,
    isLoading,
    hasError,
  })
}