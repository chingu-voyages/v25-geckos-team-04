import React, { FC } from 'react'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import styles from './IconButton.module.css'

interface IIconButton {
  name: 'gps' | 'celsius' | 'fahrenheit'
  on?: boolean
  onClick?: () => void
}

export const IconButton: FC<IIconButton> = ({ name, on, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.container} ${name === 'gps' ? styles.gps : null} ${
        on ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      {name === 'gps' && <GpsFixedIcon fontSize="large" />}
      {name === 'celsius' && <span>&deg;C</span>}
      {name === 'fahrenheit' && <span>&deg;F</span>}
    </button>
  )
}

// <IconButton name="celsius" on=true />
// <IconButton name="fahrenheit" on=false />
// <IconButton name="gps" />
