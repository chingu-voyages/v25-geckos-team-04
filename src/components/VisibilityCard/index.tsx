import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './VisibilityCard.module.css'

interface IVisibilityCard {
  metric: 'celsius' | 'fahrenheit'
  value: number
}

export const VisibilityCard: FC<IVisibilityCard> = ({
  metric = 'celsius',
  value,
}) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Visibility</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {metric === 'celsius' ? 'km' : 'miles'}
      </div>
    </HighlightCard>
  )
}
