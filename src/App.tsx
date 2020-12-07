import React, { FC } from 'react'
import { Sidebar } from './components/Sidebar'
import CurrentWeatherByCityContainer from './containers/CurrentWeatherByCityContainer'

export const App: FC = () => {
  // Will have appContainer class for now until page component is build to support responsive sidebar;
  return (
    <div className="appContainer">
      <CurrentWeatherByCityContainer>
        <Sidebar />
        <h1>Weather App</h1>
      </CurrentWeatherByCityContainer>
    </div>
  )
}
