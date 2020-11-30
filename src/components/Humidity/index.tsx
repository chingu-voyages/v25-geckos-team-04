import React, { FC } from 'react'
import { HighlightCard } from '../HighlightCard'
import styles from './Humidity.module.css'

interface IHumidity {
  value: number
}

export const Humidity: FC<IHumidity> = ({ value }) => {
  return (
    <HighlightCard>
      <div className={styles.title}>Humidity</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>%
      </div>
    </HighlightCard>
  )
}
