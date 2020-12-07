import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import { WindDirection } from '../WindDirection'
import styles from './WindStatusCard.module.css'

interface IWindStatusCard {
  metric: 'celsius' | 'fahrenheit'
  value: number
}

export const WindStatusCard: FC<IWindStatusCard> = ({
  metric = 'celsius',
  value,
}) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Wind Status</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {metric === 'celsius' ? 'km/h' : 'mph'}
      </div>
      <WindDirection degrees={180} />
    </HighlightCard>
  )
}
