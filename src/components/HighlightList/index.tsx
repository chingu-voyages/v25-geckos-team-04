import React, { FC } from 'react'
import styles from './HighlightList.module.css'

interface IHighlightList {
  children: React.ReactNode
}

export const HighlightList: FC<IHighlightList> = ({ children }) => {
  return (
    <div className={styles.list__wrapper}>
      <h2 className={styles.heading}>Today's Highlights</h2>
      {children}
    </div>
  )
}
