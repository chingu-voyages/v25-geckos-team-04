import React, { FC } from 'react'
import styles from './Visibility.module.css'

interface IVisibility {
  metric: 'celsius' | 'fahrenheit'
  value: number
}

export const Visibility: FC<IVisibility> = ({ metric = 'celsius', value }) => {
  return (
    <>
      <div className={styles.title}>Visibility</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {metric === 'celsius' ? 'km' : 'miles'}
      </div>
    </>
  )
}
