import React, { FC } from 'react'
import styles from './Button.module.css'

interface IButton {
  color?: 'primary' | 'secondary'
  value: string | number
}

export const Button: FC<IButton> = ({ color = 'primary', value }) => {
  return (
    <>
      <button className={color === 'primary' ? 'styles.button-primary' : 'styles.button-secondary'}>
        {value}
      </button>
    </>
  )
}
