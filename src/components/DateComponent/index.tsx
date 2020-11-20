import React, { FC } from 'react'
import { format, isTomorrow } from 'date-fns'
import styles from './Date.module.css'

interface IDateComponent {
  date: Date
}

export const DateComponent: FC<IDateComponent> = ({ date }) => {
  const checkTomorrow = isTomorrow(date)
  const formattedDate = format(date, 'eee d MMM')

  return (
    <div className={styles.date}>
      {checkTomorrow ? 'Tomorrow' : formattedDate}
    </div>
  )
}
