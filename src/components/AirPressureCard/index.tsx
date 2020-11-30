import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './AirPressureCard.module.css'

interface IAirPressureCard {
  value: number
}

export const AirPressureCard: FC<IAirPressureCard> = ({ value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Air Pressure</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>mb
      </div>
    </HighlightCard>
  )
}
