import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './AirPressure.module.css'

interface IAirPressure {
  value: number
}

export const AirPressure: FC<IAirPressure> = ({ value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Air Pressure</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>mb
      </div>
    </HighlightCard>
  )
}
