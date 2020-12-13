import React, { FC, useState, createContext } from 'react'

const defaultMetric = 'metric'
const defaultLatLon = { lat: 0, lon: 0 }

type AppContextType = {
  metric: string
  setMetric: (value: string) => void
  latLon: { lat: number; lon: number }
  setLatLon: (value: { lat: number; lon: number }) => void
}

// eslint-disable-next-line max-len
export const AppContext = createContext<AppContextType>({
  metric: defaultMetric,
  setMetric: () => {},
  latLon: defaultLatLon,
  setLatLon: () => {},
})

interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [metric, setMetric] = useState(defaultMetric)
  const [latLon, setLatLon] = useState(defaultLatLon)

  return (
    <AppContext.Provider value={{ metric, setMetric, latLon, setLatLon }}>
      {children}
    </AppContext.Provider>
  )
}
