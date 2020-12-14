import React, { FC, useState, createContext } from 'react'

const defaultUnit = 'metric'
const defaultLatLon = { lat: 0, lon: 0 }

type AppContextType = {
  units: 'metric' | 'imperial'
  setUnits: (value: 'metric' | 'imperial') => void
  latLon: { lat: number; lon: number }
  setLatLon: (value: { lat: number; lon: number }) => void
}

export const AppContext = createContext<AppContextType>({
  units: defaultUnit,
  setUnits: () => {},
  latLon: defaultLatLon,
  setLatLon: () => {},
})

interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [units, setUnits] = useState(defaultUnit)
  const [latLon, setLatLon] = useState(defaultLatLon)

  return (
    <AppContext.Provider
      value={{ units: 'metric', setUnits, latLon, setLatLon }}
    >
      {children}
    </AppContext.Provider>
  )
}
