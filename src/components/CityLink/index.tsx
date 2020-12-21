import React, { FC, MouseEvent } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import styles from './CityLink.module.css'

interface ICityLink {
  city: string
  country: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

export const CityLink: FC<ICityLink> = ({ city, country, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.container}>
      {city}, {country}
      <span className={styles.icon}>
        <ChevronRightIcon fontSize="large" />
      </span>
    </button>
  )
}
