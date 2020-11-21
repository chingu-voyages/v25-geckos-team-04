import React, { FC } from 'react'
import { format, isTomorrow } from 'date-fns'
import styles from './Date.module.css'

interface IDateComponent {
  date: Date
  formatString: string
}

export const DateComponent: FC<IDateComponent> = ({ date, formatString }) => {
  const checkTomorrow = isTomorrow(date)
  const formattedDate = format(date, formatString)

  return (
    <div className={styles.date}>
      {checkTomorrow ? 'Tomorrow' : formattedDate}
    </div>
  )
}
