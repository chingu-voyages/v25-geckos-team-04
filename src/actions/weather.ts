export enum DailyWeatherActionTypes {
  'SET_DAILY_WEATHER' = 'SET_DAILY_WEATHER',
  'SET_DAILY_WEATHER_IS_LOADING' = 'SET_DAILY_WEATHER_IS_LOADING',
  'SET_DAILY_WEATHER_HAS_ERROR' = 'SET_DAILY_WEATHER_HAS_ERROR',
}

export enum WeeklyWeatherActionTypes {
  'SET_WEEKLY_WEATHER' = 'SET_WEEKLY_WEATHER',
  'SET_WEEKLY_WEATHER_IS_LOADING' = 'SET_WEEKLY_WEATHER_IS_LOADING',
  'SET_WEEKLY_WEATHER_HAS_ERROR' = 'SET_WEEKLY_WEATHER_HAS_ERROR',
}

export enum SearchWeatherActionTypes {
  'SET_SEARCH_WEATHER' = 'SET_SEARCH_WEATHER',
  'SET_SEARCH_WEATHER_IS_LOADING' = 'SET_SEARCH_WEATHER_IS_LOADING',
  'SET_SEARCH_WEATHER_HAS_ERROR' = 'SET_SEARCH_WEATHER_HAS_ERROR',
}

export type DailyWeatherAction = keyof typeof DailyWeatherActionTypes
export type WeeklyWeatherAction = keyof typeof WeeklyWeatherActionTypes
export type SearchWeatherAction = keyof typeof SearchWeatherActionTypes

const setDailyWeather = (dailyWeather: []) => {
  return {
    payload: { dailyWeather },
    type: DailyWeatherActionTypes.SET_DAILY_WEATHER,
  }
}

const setWeeklyWeather = (weeklyWeather: []) => {
  return {
    payload: { weeklyWeather },
    type: WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER,
  }
}

const setSearchWeather = (searchWeatherResults: []) => {
  return {
    payload: { searchWeatherResults },
    type: SearchWeatherActionTypes.SET_SEARCH_WEATHER,
  }
}

const setDailyWeatherIsLoading = (isLoading: boolean) => {
  return {
    payload: { isLoading },
    type: DailyWeatherActionTypes.SET_DAILY_WEATHER_IS_LOADING,
  }
}

const setWeeklyWeatherIsLoading = (isLoading: boolean) => {
  return {
    payload: { isLoading },
    type: WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER_IS_LOADING,
  }
}

const setSearchWeatherIsLoading = (isLoading: boolean) => {
  return {
    payload: { isLoading },
    type: SearchWeatherActionTypes.SET_SEARCH_WEATHER_IS_LOADING,
  }
}

const setDailyWeatherHasError = (hasError: boolean) => {
  return {
    payload: { hasError },
    type: DailyWeatherActionTypes.SET_DAILY_WEATHER_HAS_ERROR,
  }
}

const setWeeklyWeatherHasError = (hasError: boolean) => {
  return {
    payload: { hasError },
    type: WeeklyWeatherActionTypes.SET_WEEKLY_WEATHER_HAS_ERROR,
  }
}

const setSearchWeatherHasError = (hasError: boolean) => {
  return {
    payload: { hasError },
    type: SearchWeatherActionTypes.SET_SEARCH_WEATHER_HAS_ERROR,
  }
}

export const DailyWeatherActions = {
  setDailyWeather,
  setDailyWeatherIsLoading,
  setDailyWeatherHasError,
}

export const WeeklyWeatherActions = {
  setWeeklyWeather,
  setWeeklyWeatherIsLoading,
  setWeeklyWeatherHasError,
}

export const SearchWeatherActions = {
  setSearchWeather,
  setSearchWeatherIsLoading,
  setSearchWeatherHasError,
}
