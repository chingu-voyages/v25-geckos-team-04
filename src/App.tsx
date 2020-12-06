import React, { FC } from 'react'
import { Sidebar } from './components/Sidebar'
import { MetricProvider } from './contexts/MetricContext'

export const App: FC = () => {
  // Will have appContainer class for now until page component is build to support responsive sidebar;
  return (
    <div className="appContainer">
      <MetricProvider>
        <Sidebar />
        <h1>Weather App</h1>
      </MetricProvider>
    </div>
  )
}
