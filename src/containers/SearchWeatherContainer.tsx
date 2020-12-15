import React, { FC, useEffect, useReducer, useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { openWeatherApi } from '../api'
import {
  searchWeatherReducerInitialState,
  searchWeatherReducer,
} from '../reducers/weather'
import { SearchWeatherActions } from '../actions/weather'

interface IInjectedSearchWeatherRenderProps {
  isLoading: boolean
  hasError: boolean
  getSearchWeatherResults: (
    queryString: string,
    weatherUnits: 'metric' | 'imperial',
  ) => void
  searchString: string
  setSearchString: (value: string) => void
  searchWeatherResults: {
    list: {
      id: number
      name: string
      coord: { lat: number; lon: number }
      sys: { country: string }
    }[]
  }
}

interface ISearchWeatherContainer {
  render: (props: IInjectedSearchWeatherRenderProps) => React.ReactElement
}

export const SearchWeatherContainer: FC<ISearchWeatherContainer> = ({
  render,
}) => {
  const [weatherState, dispatch] = useReducer(
    searchWeatherReducer,
    searchWeatherReducerInitialState,
  )

  const appContext = useContext(AppContext)
  const [searchString, setSearchString] = useState('')

  const getSearchWeatherResults = async (
    queryString: string,
    weatherUnits: 'metric' | 'imperial',
  ) => {
    dispatch(SearchWeatherActions.setSearchWeatherIsLoading(true))
    dispatch(SearchWeatherActions.setSearchWeatherHasError(false))

    try {
      if (queryString) {
        const { data } = await openWeatherApi.get('/find', {
          params: {
            q: queryString,
            units: weatherUnits,
          },
        })
        dispatch(SearchWeatherActions.setSearchWeather(data))
      }
      dispatch(SearchWeatherActions.setSearchWeatherIsLoading(false))
    } catch (e) {
      dispatch(SearchWeatherActions.setSearchWeatherIsLoading(false))
      dispatch(SearchWeatherActions.setSearchWeatherHasError(true))
    }
  }

  useEffect(() => {
    dispatch(SearchWeatherActions.setSearchWeatherIsLoading(true))
    dispatch(SearchWeatherActions.setSearchWeatherHasError(false))

    getSearchWeatherResults(searchString, appContext.units)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, appContext.units])

  const { searchWeatherResults, isLoading, hasError } = weatherState

  return render({
    searchWeatherResults,
    isLoading,
    hasError,
    getSearchWeatherResults,
    searchString,
    setSearchString,
  })
}
