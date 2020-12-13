import { DailyWeatherActionTypes } from '../actions/weather'
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

export const dailyWeatherReducer = (
  state: IDailyWeatherReducerReducerState,
  action: IAction,
) => {
  switch (action.type) {
    case DailyWeatherActionTypes.SET_DAILY_WEATHER:
      return { ...state, dailyWeather: action.payload.dailyWeather }
    case DailyWeatherActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    case DailyWeatherActionTypes.SET_HAS_ERROR:
      return { ...state, hasError: action.payload.hasError }
    default:
      return state
  }
}
