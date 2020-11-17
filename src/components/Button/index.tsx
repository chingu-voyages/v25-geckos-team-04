import React, { FC, MouseEvent } from 'react'
import styles from './Button.module.css'

interface IButton {
  style: 'primary' | 'accent'
  onClick: (e: MouseEvent<HTMLElement>) => void
}

export const Button: FC<IButton> = ({
  style = 'primary',
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={style === 'primary' ? styles.btnPrimary : styles.btnAccent}
    >
      {children}
    </button>
  )
}
