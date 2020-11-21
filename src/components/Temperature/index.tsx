import React, { FC } from 'react'
import styles from './Temperature.module.css'

interface ITemperature {
  metric?: 'fahrenheit' | 'celsius'
  value: string | number
}

export const Temperature: FC<ITemperature> = ({
  metric = 'celsius',
  value,
}) => {
  return (
    <>
      <span className={styles.value}>{value}</span>
      <span className={styles.metric}>
        &deg;{metric === 'celsius' ? 'C' : 'F'}
      </span>
    </>
  )
}
