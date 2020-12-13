import React, { FC } from 'react'
import { AppProvider } from './contexts/AppContext'
import { MainPage } from './components/MainPage'
import { CurrentDailyWeatherContainer } from './containers'

export const App: FC = () => {
  // Will have appContainer class for now until page component is build to support responsive sidebar;
  return (
    <div className="appContainer">
      <AppProvider>
        <CurrentDailyWeatherContainer />
        <MainPage />
      </AppProvider>
    </div>
  )
}
