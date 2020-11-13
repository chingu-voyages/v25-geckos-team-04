import React, { FC } from 'react'
import { Temperature, Button } from './components'

export const App: FC = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <Temperature value={15} scale="celsius" />
      <Button value={15} scale="celsius" />
    </div>
  )
}
