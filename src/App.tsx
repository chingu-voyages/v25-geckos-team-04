import React, { FC } from 'react'
import { AppProvider } from './contexts/AppContext'
import { MainPage } from './components/MainPage'
import {
  CurrentDailyWeatherContainer,
  WeeklyWeatherContainer,
  SearchWeatherContainer,
} from './containers'
import { Sidebar } from './components/Sidebar'
import { SearchSidebar } from './components/SearchSidebar'

export const App: FC = () => {
  return (
    <div className="appContainer">
      <AppProvider>
        <CurrentDailyWeatherContainer
          render={({
            dailyWeather,
            isLoading,
            hasError,
            getDailyWeather,
            updateWeatherByCurrentLocation,
          }) => {
            if (isLoading) {
              return <div>Loading...</div>
            }

            if (hasError) {
              return <div>Something went wrong</div>
            }

            return (
              <Sidebar
                weatherData={dailyWeather}
                updateWeatherByCurrentLocation={updateWeatherByCurrentLocation}
              />
            )
          }}
        />

        <SearchWeatherContainer
          render={({
            searchWeatherResults,
            isLoading,
            hasError,
            getSearchWeatherResults,
            setSearchString,
          }) => {
            if (isLoading) {
              return <div>Loading...</div>
            }

            if (hasError) {
              return <div>Something went wrong</div>
            }

            return (
              <SearchSidebar
                setCitySearchString={setSearchString}
                citySearchResults={searchWeatherResults}
              />
            )
          }}
        />
        <WeeklyWeatherContainer
          render={({
            weeklyWeather,
            isLoading,
            hasError,
            getWeeklyWeather,
          }) => {
            if (isLoading) {
              return <div>Loading...</div>
            }

            if (hasError) {
              return <div>Something went wrong</div>
            }

            return <MainPage weatherData={weeklyWeather} />
          }}
        />
      </AppProvider>
    </div>
  )
}
