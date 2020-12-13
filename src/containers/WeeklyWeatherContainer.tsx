import React, { FC, useReducer, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  weeklyWeatherReducerInitialState,
  weeklyWeatherReducer,
} from '../reducers/weather'
import { WeatherActions } from '../actions/weather'

interface IInjectedWeeklyWeatherRenderProps {
  weeklyWeather: any[]
  isLoading: boolean
  hasError: boolean
  getWeeklyWeather: () => void
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

  const getWeeklyWeather = async () => {
    dispatch(WeatherActions.setIsLoading(true))
    dispatch(WeatherActions.setHasError(false))

    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          units: appContext.metric,
          id: appContext.cityId,
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
