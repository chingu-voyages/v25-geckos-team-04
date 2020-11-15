import React, { Children, FC } from 'react'
import styles from './Button.module.css'

interface IButton {
  style: 'primary' | 'accent'
}

export const Button: FC<IButton> = ({ style = 'primary', children }) => {
  return (
    <button
      type='button'
      className={style === 'primary' ? styles.btnPrimary : styles.btnAccent}
    >
      {children}
    </button>
  )
}
