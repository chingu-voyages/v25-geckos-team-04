import React, { FC, MouseEvent } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import styles from './CityLink.module.css'

interface ICityLink {
  city: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

export const CityLink: FC<ICityLink> = ({ city, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.container}>
      {city}
      <span className={styles.icon}>
        <ChevronRightIcon fontSize="large" />
      </span>
    </button>
  )
}

// <CityLink city='Barcelona' onClick={} />
