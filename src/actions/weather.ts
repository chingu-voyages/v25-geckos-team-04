export enum WeatherActionTypes {
  'GET_CURRENT_WEATHER_BY_CITY' = 'GET_CURRENT_WEATHER_BY_CITY',
}

export type WeatherAction = keyof typeof WeatherActionTypes

const getCurrentWeatherByCity = (currentWeather: []) => {
  return {
    payload: { currentWeather },
    type: WeatherActionTypes.GET_CURRENT_WEATHER_BY_CITY,
  }
}

export const WeatherActions = {
  getCurrentWeatherByCity,
}
