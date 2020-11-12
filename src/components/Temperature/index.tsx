import React, { FC } from 'react'
import styles from './Temperature.module.css'

interface ITemperature {
  scale?: 'fahrenheit' | 'celsius'
  value: string | number
}

export const Temperature: FC<ITemperature> = ({ scale = 'celsius', value }) => {
  return (
    <>
      <span className={styles.value}>{value}</span>
      <span className={styles.scale}>
        &deg;{scale === 'celsius' ? 'C' : 'F'}
      </span>
    </>
  )
}
