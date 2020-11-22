import React, { FC } from 'react'
import styles from './WeatherCard.module.css'
import { DateComponent } from '../DateComponent'
import { Temperature } from '../Temperature'
import { WeatherIcon } from '../WeatherIcon'

interface IWeatherCard {
  date: Date
  formatString: string
  icon: 'clear' | 'hail' | 'heavyCloud' | 'heavyRain' | 'lightCloud' | 'lightRain' | 'shower' | 'sleet' | 'snow' | 'thunderstorm'
  iconSize?: 'small' | 'big'
  temperatureDegree: number
  metric?: 'fahrenheit' | 'celsius'
}

export const WeatherCard: FC<IWeatherCard> = ({ date, formatString, icon, iconSize, temperatureDegree, metric }) => {
  return (
    <div className={styles.list}>
      <div className={styles.card}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <Temperature value={temperatureDegree} metric={metric} />
      </div>
      <div className={styles.card}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <Temperature value={temperatureDegree} metric={metric} />
      </div>
      <div className={styles.card}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <Temperature value={temperatureDegree} metric={metric} />
      </div>
      <div className={styles.card}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <Temperature value={temperatureDegree} metric={metric} />
      </div>
    </div>
  )
}
