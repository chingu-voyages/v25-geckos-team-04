import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './VisibilityCard.module.css'

interface IVisibilityCard {
  units: 'metric' | 'imperial'
  value: number
}

export const VisibilityCard: FC<IVisibilityCard> = ({ units, value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Visibility</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {units === 'metric' ? 'km' : 'miles'}
      </div>
    </HighlightCard>
  )
}
