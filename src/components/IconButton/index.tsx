import React, { FC } from 'react'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import styles from './IconButton.module.css'


interface IIconButton {
  value?: string
  type: 'gps' | 'main'
  state?: 'on' | 'off'
}

export const IconButton: FC<IIconButton> = ({ value, type, state }) => {

  return (
    <div className={`${styles.iconbutton} ${type === 'gps'? styles.gps : null} ${state === 'on'? styles.primary : styles.secondary}`}>
      {type === 'gps'? <GpsFixedIcon /> : `${value}`}
    </div>
  )
}

// <IconButton value="&deg;C" type="main" state="on" />
// <IconButton value="&deg;F" type="main" state="off" />
// <IconButton type="gps" />