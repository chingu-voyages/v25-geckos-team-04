import React, { FC } from 'react'
import styles from './WeatherTitle.module.css'


interface IWeatherTitle {
  value: string
}

export const WeatherTitle: FC<IWeatherTitle> = ({ value }) => {

  return (
    <div className={styles.weatherTitle}>
      {value}
    </div>
  )
}