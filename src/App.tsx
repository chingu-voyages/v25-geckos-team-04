import React, { FC } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainPage } from './components/MainPage'

export const App: FC = () => {
  // Will have appContainer class for now until page component is build to support responsive sidebar;
  return (
    <div className="appContainer">
      <Sidebar />
      <MainPage />
    </div>
  )
}
