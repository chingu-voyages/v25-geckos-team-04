import React, { FC, useEffect, useReducer, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  dailyWeatherReducerInitialState,
  dailyWeatherReducer,
} from '../reducers/weather'
import { DailyWeatherActions } from '../actions/weather'

interface IInjectedDailyWeatherRenderProps {
  dailyWeather: {
    name: string
    main: { temp: number }
    weather: { main: string; id: number }[]
    sys: { country: string }
  }
  isLoading: boolean
  hasError: boolean
  getDailyWeather: () => void
  updateWeatherByCurrentLocation: () => void
}

interface ICurrentDailyWeatherContainer {
  render: (props: IInjectedDailyWeatherRenderProps) => React.ReactElement
}

export const CurrentDailyWeatherContainer: FC<ICurrentDailyWeatherContainer> = ({
  render,
}) => {
  const [weatherState, dispatch] = useReducer(
    dailyWeatherReducer,
    dailyWeatherReducerInitialState,
  )

  const appContext = useContext(AppContext)

  function updateWeatherByCurrentLocation() {
    appContext.setWeatherByCurrentLocation(true)
  }

  const getDailyWeather = async () => {
    dispatch(DailyWeatherActions.setDailyWeatherIsLoading(true))
    dispatch(DailyWeatherActions.setDailyWeatherHasError(false))

    try {
      const { data } = await openWeatherApi.get('/weather', {
        params: {
          lat: appContext.latLon.lat,
          lon: appContext.latLon.lon,
          units: appContext.units,
        },
      })

      dispatch(DailyWeatherActions.setDailyWeather(data))
      dispatch(DailyWeatherActions.setDailyWeatherIsLoading(false))
    } catch (e) {
      dispatch(DailyWeatherActions.setDailyWeatherIsLoading(false))
      dispatch(DailyWeatherActions.setDailyWeatherHasError(true))
    }
  }

  function setLocationToCurrent(pos: {
    coords: { latitude: number; longitude: number }
  }) {
    const crd = pos.coords
    const lat = crd.latitude
    const lon = crd.longitude

    if (
      lat &&
      lon &&
      lat !== appContext.latLon.lat &&
      lon !== appContext.latLon.lon
    ) {
      appContext.setLatLon({ lat, lon })
    }
  }

  useEffect(() => {
    dispatch(DailyWeatherActions.setDailyWeatherIsLoading(true))
    dispatch(DailyWeatherActions.setDailyWeatherHasError(false))

    if (appContext.weatherByCurrentLocation) {
      navigator.geolocation.getCurrentPosition(setLocationToCurrent)
    }

    getDailyWeather()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appContext.latLon, appContext.weatherByCurrentLocation, appContext.units])

  const { dailyWeather, isLoading, hasError } = weatherState

  return render({
    dailyWeather,
    getDailyWeather,
    isLoading,
    hasError,
    updateWeatherByCurrentLocation,
  })
}
