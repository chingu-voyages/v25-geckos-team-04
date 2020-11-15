import React, { Children, FC, MouseEvent } from 'react'
import styles from './Button.module.css'

interface IButton {
  style: 'primary' | 'accent'
  // TODO need ti add type for onClick. what I write here is throwing an error...
  onClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Button: FC<IButton> = ({ style = 'primary', onClick, children }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={style === 'primary' ? styles.btnPrimary : styles.btnAccent}
    >
      {children}
    </button>
  )
}
