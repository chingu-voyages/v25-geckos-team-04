import React, { FC } from 'react'
import { WindDirection } from './components'

export const App: FC = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <WindDirection degrees={180} />
    </div>
  )
}
