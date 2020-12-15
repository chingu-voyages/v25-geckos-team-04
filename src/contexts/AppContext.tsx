import React, { FC, useState, createContext } from 'react'

type UnitType = 'metric' | 'imperial'

const defaultUnit = 'metric'
const defaultLatLon = { lat: 0, lon: 0 }
const defaultShowSearchSidebar = false
const defaultWeatherByCurrentLocation = true

type AppContextType = {
  units: UnitType
  setUnits: (value: UnitType) => void
  latLon: { lat: number; lon: number }
  setLatLon: (value: { lat: number; lon: number }) => void
  showSearchSidebar: boolean
  setShowSearchSidebar: (value: boolean) => void
  weatherByCurrentLocation: boolean
  setWeatherByCurrentLocation: (value: boolean) => void
}

export const AppContext = createContext<AppContextType>({
  units: defaultUnit,
  setUnits: () => {},
  latLon: defaultLatLon,
  setLatLon: () => {},
  showSearchSidebar: defaultShowSearchSidebar,
  setShowSearchSidebar: () => {},
  weatherByCurrentLocation: defaultWeatherByCurrentLocation,
  setWeatherByCurrentLocation: () => {},
})

interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [units, setUnits] = useState<UnitType>(defaultUnit)
  const [latLon, setLatLon] = useState(defaultLatLon)
  const [showSearchSidebar, setShowSearchSidebar] = useState(false)
  const [weatherByCurrentLocation, setWeatherByCurrentLocation] = useState(true)

  return (
    <AppContext.Provider
      value={{
        units,
        setUnits,
        latLon,
        setLatLon,
        showSearchSidebar,
        setShowSearchSidebar,
        weatherByCurrentLocation,
        setWeatherByCurrentLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
