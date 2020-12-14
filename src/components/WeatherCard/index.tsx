import React, { FC } from 'react'
import styles from './WeatherCard.module.css'
import { DateComponent } from '../DateComponent'
import { Temperature } from '../Temperature'
import { WeatherIcon } from '../WeatherIcon'
import { IMAGES as WEATHERICONS } from '../WeatherIcon/WeatherIcons'

interface IWeatherCard {
  date: Date
  formatString: string
  icon: keyof typeof WEATHERICONS
  iconSize?: 'small' | 'big'
  temperatureHighest: number
  temperatureLowest: number
  units: 'imperial' | 'metric'
  temperatureSize?: 'small' | 'big'
}

export const WeatherCard: FC<IWeatherCard> = ({
  date,
  formatString,
  icon,
  iconSize,
  temperatureHighest,
  temperatureLowest,
  units,
  temperatureSize,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.date}>
        <DateComponent date={date} formatString={formatString} />
      </div>
      <div className={styles.image}>
        <WeatherIcon size={iconSize} icon={icon} />
      </div>
      <div className={styles.footer}>
        <div>
          <Temperature
            value={temperatureHighest}
            units={units}
            size={temperatureSize}
          />
        </div>
        <div>
          <Temperature
            value={temperatureLowest}
            units={units}
            size={temperatureSize}
          />
        </div>
      </div>
    </div>
  )
}
