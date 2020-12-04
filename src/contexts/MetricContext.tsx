import React, { FC, useState, createContext } from 'react'

const defaultMetric = 'celsius'

type MetricContextType = {
  metric: string
  setMetric: (value: string) => void
}

export const MetricContext = createContext<MetricContextType | string>(
  defaultMetric,
)

interface IMetricProvider {
  children: React.ReactNode
}

export const MetricProvider: FC<IMetricProvider> = ({ children }) => {
  const [metric, setMetric] = useState(defaultMetric)

  return (
    <MetricContext.Provider value={{ metric, setMetric }}>
      {children}
    </MetricContext.Provider>
  )
}
