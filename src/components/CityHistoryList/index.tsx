import React, { FC } from 'react'
import styles from './CityHistoryList.module.css'

interface ICityHistoryList {
  children: React.ReactNode
}

export const CityHistoryList: FC<ICityHistoryList> = ({ children }) => {
  return <div className={styles.list}>{children}</div>
}

// <CityLink value='Barcelona' onClick={} />
