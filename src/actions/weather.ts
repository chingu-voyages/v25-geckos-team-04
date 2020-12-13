export enum DailyWeatherActionTypes {
  'SET_DAILY_WEATHER' = 'SET_DAILY_WEATHER',
  'SET_IS_LOADING' = 'SET_IS_LOADING',
  'SET_HAS_ERROR' = 'SET_HAS_ERROR',
}

export type WeatherAction = keyof typeof DailyWeatherActionTypes

const setDailyWeather = (dailyWeather: []) => {
  return {
    payload: { dailyWeather },
    type: DailyWeatherActionTypes.SET_DAILY_WEATHER,
  }
}

const setIsLoading = (isLoading: boolean) => {
  return {
    payload: { isLoading },
    type: DailyWeatherActionTypes.SET_IS_LOADING,
  }
}

const setHasError = (hasError: boolean) => {
  return {
    payload: { hasError },
    type: DailyWeatherActionTypes.SET_HAS_ERROR,
  }
}

export const DailyWeatherActions = {
  setDailyWeather,
  setIsLoading,
  setHasError,
}
