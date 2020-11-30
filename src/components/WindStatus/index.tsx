import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './WindStatus.module.css'

interface IWindStatus {
  metric: 'celsius' | 'fahrenheit'
  value: number
}

export const WindStatus: FC<IWindStatus> = ({ metric = 'celsius', value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Wind Status</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {metric === 'celsius' ? 'km/h' : 'mph'}
      </div>
    </HighlightCard>
  )
}
