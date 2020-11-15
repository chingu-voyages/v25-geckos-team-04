import React, { FC } from 'react'
import { IconButton } from './components'

export const App: FC = () => {
  return (
    <div>
      <h1>Weather APPPP</h1>
      <IconButton name="celcius" on={true} />
      <IconButton name="fahrenheit" on={false} />
      <IconButton name="gps" />
    </div>
  )
}
