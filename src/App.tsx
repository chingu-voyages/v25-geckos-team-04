import React, { FC } from 'react'
import { AppProvider } from './contexts/AppContext'
import { MainPage } from './components/MainPage'
import {
  CurrentDailyWeatherContainer,
  WeeklyWeatherContainer,
} from './containers'
import { Sidebar } from './components/Sidebar'

export const App: FC = () => {
  return (
    <div className="appContainer">
      <AppProvider>
        <CurrentDailyWeatherContainer
          render={({ dailyWeather, isLoading, hasError, getDailyWeather }) => {
            if (isLoading) {
              return <div>Loading...</div>
            }

            if (hasError) {
              return <div>Something went wrong</div>
            }

            return (
              <Sidebar
                weatherData={dailyWeather}
                showSearchSidebar={() => {}}
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
