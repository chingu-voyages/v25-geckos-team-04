import React, { FC } from 'react'
import styles from './WeatherCard.module.css'
import { DateComponent, Temperature, WeatherIcon } from './components'

interface IWeatherCard {
  date: Date
  formatString: String
  icon: String
  iconSize: String
  temperatureDegree: Number
  scale: String
}

export const WeatherCard: FC<IWeatherCard> = ({ date, formatString, icon, iconSize, temperatureDegree, scale }) => {
  return (
    <div className={styles.weatherCard}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <Temperature value={temperatureDegree} scale={scale} />
    </div>
  )
}
