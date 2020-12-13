import React, { FC } from 'react'
import { AppProvider } from './contexts/AppContext'
import { MainPage } from './components/MainPage'
import { CurrentDailyWeatherContainer } from './containers'
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

            return <Sidebar showSearchSidebar={() => {}} />
          }}
        />
        <MainPage />
      </AppProvider>
    </div>
  )
}
