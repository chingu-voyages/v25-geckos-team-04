import React, { FC } from 'react'
import { Sidebar } from './components/Sidebar'

export const App: FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <h1>Weather App</h1>
    </div>
  )
}
