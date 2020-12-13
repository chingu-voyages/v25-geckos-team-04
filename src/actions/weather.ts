export enum WeatherActionTypes {
  'SET_DAILY_WEATHER' = 'SET_DAILY_WEATHER',
  'SET_WEEKLY_WEATHER' = 'SET_WEEKLY_WEATHER',
  'SET_IS_LOADING' = 'SET_IS_LOADING',
  'SET_HAS_ERROR' = 'SET_HAS_ERROR',
}

export type WeatherAction = keyof typeof WeatherActionTypes

const setDailyWeather = (dailyWeather: []) => {
  return {
    payload: { dailyWeather },
    type: WeatherActionTypes.SET_DAILY_WEATHER,
  }
}

const setWeeklyWeather = (weeklyWeather: []) => {
  return {
    payload: { weeklyWeather },
    type: WeatherActionTypes.SET_WEEKLY_WEATHER,
  }
}

const setIsLoading = (isLoading: boolean) => {
  return {
    payload: { isLoading },
    type: WeatherActionTypes.SET_IS_LOADING,
  }
}

const setHasError = (hasError: boolean) => {
  return {
    payload: { hasError },
    type: WeatherActionTypes.SET_HAS_ERROR,
  }
}

export const WeatherActions = {
  setDailyWeather,
  setWeeklyWeather,
  setIsLoading,
  setHasError,
}
