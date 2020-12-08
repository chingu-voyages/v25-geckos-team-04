import { WeatherAction, WeatherActionTypes } from '../actions/weather'

interface ICurrentWeatherByCityReducerState {
  currentWeather: string[]
}

export const currentWeatherByCityInitialState = {
  currentWeather: [],
}

export const currentWeatherByCityReducer = (
  state: ICurrentWeatherByCityReducerState,
  action: { type: WeatherAction; payload: {} },
) => {
  switch (action.type) {
    case WeatherActionTypes.GET_CURRENT_WEATHER_BY_CITY:
      return { ...state, currentWeather: [] }
    default:
      return state
  }
}
