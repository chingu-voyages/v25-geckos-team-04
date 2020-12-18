import {
  DailyWeatherActionTypes,
  WeeklyWeatherActionTypes,
  SearchWeatherActionTypes,
} from '../actions/weather'
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

interface ISearchWeatherReducerReducerState {
  searchWeatherResults: {
    list: {
      id: number
      name: string
      coord: { lat: number; lon: number }
      sys: { country: string }
    }[]
  }
  isLoading: boolean
  hasError: boolean
}

export const searchWeatherReducerInitialState = {
  searchWeatherResults: [],
  isLoading: false,
  hasError: false,
}

export const dailyWeatherReducer = (
  state: IDailyWeatherReducerReducerState,
  action: IAction,
) => {
  switch (action.type) {
    case DailyWeatherActionTypes.SET_DAILY_WEATHER:
      return { ...state, dailyWeather: action.payload.dailyWeather }
    case DailyWeatherActionTypes.SET_DAILY_WEATHER_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case DailyWeatherActionTypes.SET_DAILY_WEATHER_HAS_ERROR:
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
    case WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER:
      return { ...state, weeklyWeather: action.payload.weeklyWeather }
    case WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER_HAS_ERROR:
      return { ...state, hasError: action.payload.hasError }
    default:
      return state
  }
}

export const searchWeatherReducer = (
  state: ISearchWeatherReducerReducerState,
  action: IAction,
) => {
  switch (action.type) {
    case SearchWeatherActionTypes.SET_SEARCH_WEATHER:
      return {
        ...state,
        searchWeatherResults: action.payload.searchWeatherResults,
      }
    case SearchWeatherActionTypes.SET_SEARCH_WEATHER_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case SearchWeatherActionTypes.SET_SEARCH_WEATHER_HAS_ERROR:
      return { ...state, hasError: action.payload.hasError }
    default:
      return state
  }
}
