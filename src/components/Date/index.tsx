import React, { FC } from 'react'
import { format, isTomorrow } from 'date-fns'
import styles from './Date.module.css'

interface IDate {
  date: Date
}

export const Date: FC<IDate> = ({ date }) => {
  const checkTomorrow = isTomorrow(date)
  const formattedDate = format(date, 'MMM Do dddd')

  return (
    <div className={styles.date}>
      {checkTomorrow ? 'Tomorrow' : formattedDate}
    </div>
  )
}
