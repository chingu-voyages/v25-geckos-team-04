import React, { FC } from 'react'
import styles from './Temperature.module.css'

interface ITemperature {
  metric?: 'fahrenheit' | 'celsius'
  value: string | number
  size?: 'small' | 'big'
}

export const Temperature: FC<ITemperature> = ({
  metric = 'celsius',
  value,
  size,
}) => {
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
        &deg;{metric === 'celsius' ? 'C' : 'F'}
      </span>
    </span>
  )
}
