import React, { FC } from 'react'
import styles from './CitySearchList.module.css'

interface ICitySearchList {
  children: React.ReactNode
}

export const CitySearchList: FC<ICitySearchList> = ({ children }) => {
  return <div className={styles.list}>{children}</div>
}

// <CityLink value='Barcelona' onClick={} />
