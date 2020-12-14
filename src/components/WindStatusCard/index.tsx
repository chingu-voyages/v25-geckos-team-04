import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import { WindDirection } from '../WindDirection'
import styles from './WindStatusCard.module.css'

interface IWindStatusCard {
  units: 'metric' | 'imperial'
  value: number
  degrees: number
}

export const WindStatusCard: FC<IWindStatusCard> = ({
  units = 'metric',
  value,
  degrees,
}) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Wind Status</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {units === 'metric' ? 'km/h' : 'mph'}
      </div>
      <WindDirection degrees={degrees} />
    </HighlightCard>
  )
}
