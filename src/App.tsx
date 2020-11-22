import React, { FC } from 'react'
import { WeatherCard } from './components'

export const App: FC = () => {

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherCard
        date={new Date()}
        formatString='eee d MMM'
        icon='heavyCloud'
        iconSize='small'
        temperatureDegree={15}
        metric="celsius"
      />
    </div>
  )
}
