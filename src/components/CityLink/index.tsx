import React, { FC, MouseEvent } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import styles from './CityLink.module.css'

interface ICityLink {
  value: string
  onClick: (e: MouseEvent<HTMLElement>) => void
}

export const CityLink: FC<ICityLink> = ({ value, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.container}>
      {value}
      <ChevronRightIcon fontSize="large" className={styles.icon} />
    </button>
  )
}

// <CityLink value='Barcelona' onClick={} />
