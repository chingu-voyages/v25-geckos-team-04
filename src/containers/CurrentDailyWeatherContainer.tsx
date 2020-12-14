import React, { FC, useEffect, useReducer, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  dailyWeatherReducerInitialState,
  dailyWeatherReducer,
} from '../reducers/weather'
import { DailyWeatherActions } from '../actions/weather'

export interface ICoords {
  lon: number
  lat: number
}

interface IInjectedDailyWeatherRenderProps {
  // eslint-disable-next-line
  dailyWeather: {
    name: string
    main: { temp: number }
    weather: { main: string; id: number }[]
  }
  isLoading: boolean
  hasError: boolean
  getDailyWeather: (
    coords: ICoords,
    weatherUnits: 'metric' | 'imperial',
  ) => void
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

  const getDailyWeather = async (
    coords: ICoords,
    weatherUnits: 'metric' | 'imperial',
  ) => {
    dispatch(DailyWeatherActions.setDailyWeatherIsLoading(true))
    dispatch(DailyWeatherActions.setDailyWeatherHasError(false))

    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          lat: coords.lat,
          lon: coords.lon,
          units: weatherUnits,
        },
      })

      dispatch(DailyWeatherActions.setDailyWeather(data))
      dispatch(DailyWeatherActions.setDailyWeatherIsLoading(false))
    } catch (e) {
      dispatch(DailyWeatherActions.setDailyWeatherIsLoading(false))
      dispatch(DailyWeatherActions.setDailyWeatherHasError(true))
    }
  }

  useEffect(() => {
    let lat
    let lon

    dispatch(DailyWeatherActions.setDailyWeatherIsLoading(true))
    dispatch(DailyWeatherActions.setDailyWeatherHasError(false))

    function success(pos: { coords: { latitude: number; longitude: number } }) {
      const crd = pos.coords

      lat = crd.latitude
      lon = crd.longitude

      if (lat && lon) {
        appContext.setLatLon({ lat, lon })
        getDailyWeather({ lat, lon }, appContext.units)
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
