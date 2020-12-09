import React, { FC } from 'react'
import { AppProvider } from './contexts/AppContext'
import { MainPage } from './components/MainPage'
import CurrentWeatherByCityContainer from './containers/CurrentWeatherByCityContainer'

export const App: FC = () => {
  // Will have appContainer class for now until page component is build to support responsive sidebar;
  return (
    <div className="appContainer">
      <AppProvider>
        <CurrentWeatherByCityContainer />
        <MainPage />
      </AppProvider>
    </div>
  )
}
