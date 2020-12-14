import { WeatherActionTypes } from '../actions/weather'
import { IAction } from '../actions/types'

interface IDailyWeatherReducerReducerState {
  dailyWeather: string[]
  isLoading: boolean
  hasError: boolean
}

export const dailyWeatherReducerInitialState = {
  dailyWeather: [],
  isLoading: false,
  hasError: false,
}

interface IWeeklyWeatherReducerReducerState {
  weeklyWeather: string[]
  isLoading: boolean
  hasError: boolean
}

export const weeklyWeatherReducerInitialState = {
  weeklyWeather: [],
  isLoading: false,
  hasError: false,
}

export const dailyWeatherReducer = (
  state: IDailyWeatherReducerReducerState,
  action: IAction,
) => {
  switch (action.type) {
    case WeatherActionTypes.SET_DAILY_WEATHER:
      return { ...state, dailyWeather: action.payload.dailyWeather }
    case WeatherActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case WeatherActionTypes.SET_HAS_ERROR:
      return { ...state, hasError: action.payload.hasError }
    default:
      return state
  }
}

export const weeklyWeatherReducer = (
  state: IWeeklyWeatherReducerReducerState,
  action: IAction,
) => {
  switch (action.type) {
    case WeatherActionTypes.SET_WEEKLY_WEATHER:
      return { ...state, weeklyWeather: action.payload.weeklyWeather }
    case WeatherActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case WeatherActionTypes.SET_HAS_ERROR:
      return { ...state, hasError: action.payload.hasError }
    default:
      return state
  }
}