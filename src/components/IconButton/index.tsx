import React, { FC } from 'react'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import styles from './IconButton.module.css'

interface IIconButton {
  name: 'gps' | 'celcius' | 'fahrenheit'
  on?: boolean
}

export const IconButton: FC<IIconButton> = ({ name, on }) => {
  return (
    <button
      type="button"
      className={`${styles.iconbutton} ${name === 'gps' ? styles.gps : null} ${
        on ? styles.primary : styles.secondary
      }`}
    >
      {name === 'gps' && <GpsFixedIcon fontSize="large" />}
      {name === 'celcius' && <span>&deg;C</span>}
      {name === 'fahrenheit' && <span>&deg;F</span>}
    </button>
  )
}

// <IconButton name="celcius" on=true />
// <IconButton name="fahrenheit" on=false />
// <IconButton name="gps" />
