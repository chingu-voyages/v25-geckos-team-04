import React, { FC, useReducer, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  weeklyWeatherReducerInitialState,
  weeklyWeatherReducer,
} from '../reducers/weather'
import { WeatherActions } from '../actions/weather'

export interface ICoords {
  lon: number
  lat: number
}

interface IInjectedWeeklyWeatherRenderProps {
  weeklyWeather: any[]
  isLoading: boolean
  hasError: boolean
  getWeeklyWeather: () => void
}

interface ICurrentWeeklyWeatherContainer {
  render: (props: IInjectedWeeklyWeatherRenderProps) => React.ReactElement
}

export const CurrentWeeklyWeatherContainer: FC<ICurrentWeeklyWeatherContainer> = ({
  render,
}) => {
  const [weatherState, dispatch] = useReducer(
    weeklyWeatherReducer,
    weeklyWeatherReducerInitialState,
  )

  const getWeeklyWeather = async () => {
    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          units: 'metric',
        },
      })

      dispatch(WeatherActions.setWeeklyWeather(data))
      dispatch(WeatherActions.setIsLoading(false))
    } catch (e) {
      dispatch(WeatherActions.setIsLoading(false))
      dispatch(WeatherActions.setHasError(true))
    }
  }

  const { weeklyWeather, isLoading, hasError } = weatherState

  return render({
    weeklyWeather,
    getWeeklyWeather,
    isLoading,
    hasError,
  })
}
