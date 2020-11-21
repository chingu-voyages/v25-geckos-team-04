import React, { FC } from 'react'
import PlaceIcon from '@material-ui/icons/Place'
import styles from './CurrentPlace.module.css'

interface ICurrentPlace {
  place: string
}

export const CurrentPlace: FC<ICurrentPlace> = ({ place }) => {
  return (
    <div className={styles.place}>
      <PlaceIcon className={styles.symbol} />
      <span className={styles.title}>{place}</span>
    </div>
  )
}
