import React, { FC, useState, createContext } from 'react'

const defaultMetric = 'celsius'
const defaultCityId = 0

type AppContextType = {
  metric: string
  setMetric: (value: string) => void
  cityId: number
  setCityId: (value: number) => void
}

// eslint-disable-next-line max-len
export const AppContext = createContext<AppContextType>({
  metric: defaultMetric,
  setMetric: () => {},
  cityId: defaultCityId,
  setCityId: () => {},
})

interface IAppProvider {
  children: React.ReactNode
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [metric, setMetric] = useState(defaultMetric)
  const [cityId, setCityId] = useState(defaultCityId)

  return (
    <AppContext.Provider value={{ metric, setMetric, cityId, setCityId }}>
      {children}
    </AppContext.Provider>
  )
}
