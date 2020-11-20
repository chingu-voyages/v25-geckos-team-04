import React, { FC } from 'react'
import { format, isTomorrow } from 'date-fns'
import styles from './Date.module.css'

interface IDate {
  date?: Date
}

export const Date: FC<IDate> = ({ date }) => {
  const checkTomorrow = isTomorrow(date)
  const formattedDate = format(data, 'EEE D MMM')

  return (
    <div className={styles.date}>
      {checkTomorrow ? 'Tomorrow' : formattedDate}
    </div>
  )
}
