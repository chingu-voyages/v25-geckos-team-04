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
  temperatureHighest: number
  temperatureLowest: number
  metric?: 'fahrenheit' | 'celsius'
  temperatureSize?: 'small' | 'big'
}

export const WeatherCard: FC<IWeatherCard> = ({
  date, formatString, icon, iconSize, temperatureHighest, temperatureLowest, metric, temperatureSize,
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.card}>
        <DateComponent date={date} formatString={formatString} />
        <WeatherIcon size={iconSize} icon={icon} />
        <div className={styles.footer}>
          <Temperature value={temperatureHighest} metric={metric} size={temperatureSize} />
          <Temperature value={temperatureLowest} metric={metric} size={temperatureSize} />
        </div>
      </div>
 
    </div>
  )
}
