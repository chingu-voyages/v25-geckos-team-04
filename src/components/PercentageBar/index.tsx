import React, { FC } from 'react'
import styles from './PercentageBar.module.css'

interface IPercentageBar {
  percentage: number
}

export const PercentageBar: FC<IPercentageBar> = ({ percentage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.percentages}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className={styles.bars}>
        <div className={styles.filled} style={{ width: `${percentage}%` }} />
        <div className={styles.empty} />
      </div>
      <div className={styles.percentageFooter}>%</div>
    </div>
  )
}
