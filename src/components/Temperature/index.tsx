import React, { FC } from 'react'
import styles from './Temperature.module.css'

interface ITemperature {
  units: 'imperial' | 'metric'
  value: string | number
  size?: 'small' | 'big'
}

export const Temperature: FC<ITemperature> = ({ units, value, size }) => {
  return (
    <span>
      <span
        className={`${styles.value} ${
          size === 'small' ? styles.small : styles.big
        }`}
      >
        {value}
      </span>
      <span
        className={`${styles.metric} ${
          size === 'small' ? styles.small : styles.big
        }`}
      >
        &deg;{units === 'metric' ? 'C' : 'F'}
      </span>
    </span>
  )
}
