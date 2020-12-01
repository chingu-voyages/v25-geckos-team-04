import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import { PercentageBar } from '../PercentageBar'
import styles from './HumidityCard.module.css'

interface IHumidityCard {
  value: number
}

export const HumidityCard: FC<IHumidityCard> = ({ value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Humidity</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>%
      </div>
      <PercentageBar percentage={84} />
    </HighlightCard>
  )
}
