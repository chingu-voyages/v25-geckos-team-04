import React, { FC, useState, createContext } from 'react'

type UnitType = 'metric' | 'imperial'

const defaultUnit = 'metric'
const defaultLatLon = { lat: 0, lon: 0 }

type AppContextType = {
  units: UnitType
  setUnits: (value: UnitType) => void
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
  const [units, setUnits] = useState<UnitType>(defaultUnit)
  const [latLon, setLatLon] = useState(defaultLatLon)

  return (
    <AppContext.Provider value={{ units, setUnits, latLon, setLatLon }}>
      {children}
    </AppContext.Provider>
  )
}
