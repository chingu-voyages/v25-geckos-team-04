import React, { FC } from 'react'
import styles from './Button.module.css'

interface IButton {
  scale?: 'fahrenheit' | 'celsius'
  value: string | number
}

export const Button: FC<IButton> = ({ scale = 'celsius', value }) => {
  return (
    <>
      <span className={styles.value}>{value}</span>
      <span className={styles.scale}>
        &deg;{scale === 'celsius' ? 'C' : 'F'}
      </span>
    </>
  )
}
