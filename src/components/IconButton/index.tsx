import React, { FC } from 'react'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import styles from './IconButton.module.css'

interface IIconButton {
  value?: string
  name: 'gps' | 'main'
  on?: boolean
}

export const IconButton: FC<IIconButton> = ({ value, name, on }) => {
  return (
    <button
      type="button"
      className={`${styles.iconbutton} ${name === 'gps' ? styles.gps : null} ${
        on ? styles.primary : styles.secondary
      }`}
    >
      {name === 'gps' ? <GpsFixedIcon fontSize="large" /> : `${value}`}
    </button>
  )
}

// <IconButton value="&deg;C" name="main" on=true />
// <IconButton value="&deg;F" name="main" on=false />
// <IconButton name="gps" />
