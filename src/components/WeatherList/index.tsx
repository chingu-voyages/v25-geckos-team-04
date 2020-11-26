import React, { FC } from 'react'
import styles from './WeatherList.module.css'

interface IWeatherList {
  children: React.ReactNode
}

export const WeatherList: FC<IWeatherList> = ({ children }) => {
  return <div className={styles.list}>{children}</div>
}
