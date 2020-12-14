import React, { FC, useReducer, useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  weeklyWeatherReducerInitialState,
  weeklyWeatherReducer,
} from '../reducers/weather'
import { WeeklyWeatherActions } from '../actions/weather'

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
    daily: {
      dt: number
      temp: { min: number; max: number }
      weather: { id: number }[]
    }[]
  }
  isLoading: boolean
  hasError: boolean
  getWeeklyWeather: (
    weatherUnits: 'metric' | 'imperial',
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
    weatherUnits: 'metric' | 'imperial',
    weatherLatLon: { lat: number; lon: number },
  ) => {
    dispatch(WeeklyWeatherActions.setWeeklyWeatherIsLoading(true))
    dispatch(WeeklyWeatherActions.setWeeklyWeatherHasError(false))

    try {
      const { data } = await openWeatherApi.get('/onecall', {
        params: {
          units: weatherUnits,
          lat: weatherLatLon.lat,
          lon: weatherLatLon.lon,
          exclude: 'minutely,hourly,alerts',
        },
      })
      dispatch(WeeklyWeatherActions.setWeeklyWeather(data))
      dispatch(WeeklyWeatherActions.setWeeklyWeatherIsLoading(false))
    } catch (e) {
      dispatch(WeeklyWeatherActions.setWeeklyWeatherIsLoading(false))
      dispatch(WeeklyWeatherActions.setWeeklyWeatherHasError(true))
    }
  }

  useEffect(() => {
    dispatch(WeeklyWeatherActions.setWeeklyWeatherIsLoading(true))
    dispatch(WeeklyWeatherActions.setWeeklyWeatherHasError(false))

    getWeeklyWeather(appContext.units, appContext.latLon)
  }, [appContext.units, appContext.latLon])

  const { weeklyWeather, isLoading, hasError } = weatherState

  return render({
    weeklyWeather,
    getWeeklyWeather,
    isLoading,
    hasError,
  })
}
