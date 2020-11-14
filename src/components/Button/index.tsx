import React, { FC } from 'react'
import styles from './Button.module.css'

interface IButton {
  style: 'primary' | 'accent'
  value: string | number
}

export const Button: FC<IButton> = ({ style = 'primary', value }) => {
  return (
    <>
      <button
        type='button'
        className={style === 'primary' ? styles.btnPrimary : styles.btnAccent}
      >
        {value}
      </button>
    </>
  )
}
