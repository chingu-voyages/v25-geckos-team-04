import React, { FC, useReducer, useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  weeklyWeatherReducerInitialState,
  weeklyWeatherReducer,
} from '../reducers/weather'
import { WeatherActions } from '../actions/weather'

interface IInjectedWeeklyWeatherRenderProps {
  // eslint-disable-next-line
  weeklyWeather: {
    current: {
      humidity: number
      pressure: number
      wind_speed: number
      wind_deg: number
      visibility: number
    }
    daily: { dt: number; temp: { min: number; max: number } }[]
  }
  isLoading: boolean
  hasError: boolean
  getWeeklyWeather: (
    weatherUnits: string,
    weatherLatLon: { lat: number; lon: number },
  ) => void
}

interface IWeeklyWeatherContainer {
  render: (props: IInjectedWeeklyWeatherRenderProps) => React.ReactElement
}

export const WeeklyWeatherContainer: FC<IWeeklyWeatherContainer> = ({
  render,
}) => {
  const [weatherState, dispatch] = useReducer(
    weeklyWeatherReducer,
    weeklyWeatherReducerInitialState,
  )

  const appContext = useContext(AppContext)

  const getWeeklyWeather = async (
    weatherUnits: string,
    weatherLatLon: { lat: number; lon: number },
  ) => {
    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    try {
      const { data } = await openWeatherApi.get('/onecall', {
        params: {
          units: weatherUnits,
          lat: weatherLatLon.lat,
          lon: weatherLatLon.lon,
          exclude: 'minutely,hourly,alerts',
        },
      })
      dispatch(WeatherActions.setWeeklyWeather(data))
      dispatch(WeatherActions.setIsLoading(false))
    } catch (e) {
      dispatch(WeatherActions.setIsLoading(false))
      dispatch(WeatherActions.setHasError(true))
    }
  }

  useEffect(() => {
    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    getWeeklyWeather(appContext.metric, appContext.latLon)
  }, [appContext.metric, appContext.latLon])

  const { weeklyWeather, isLoading, hasError } = weatherState

  return render({
    weeklyWeather,
    getWeeklyWeather,
    isLoading,
    hasError,
  })
}
