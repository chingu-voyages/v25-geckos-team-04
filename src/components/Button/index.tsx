import React, { FC, MouseEvent } from 'react'
import styles from './Button.module.css'

interface IButton {
  color?: 'primary' | 'accent'
  onClick: (e: MouseEvent<HTMLElement>) => void
  children: React.ReactNode
}

export const Button: FC<IButton> = ({
  color = 'primary',
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={color === 'primary' ? styles.primary : styles.accent}
    >
      {children}
    </button>
  )
}
