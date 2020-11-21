import React, { FC } from 'react'
import styles from './AirPressure.module.css'

interface IAirPressure {
  value: number
}

export const AirPressure: FC<IAirPressure> = ({ value }) => {
  return (
    <>
      <div className={styles.title}>Air Pressure</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>mb
      </div>
    </>
  )
}
