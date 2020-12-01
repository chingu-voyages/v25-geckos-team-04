import React, { FC } from 'react'
import styles from './HighlightCard.module.css'

interface IHighlightCard {
  children: React.ReactNode
}

export const HighlightCard: FC<IHighlightCard> = ({ children }) => {
  return <div className={styles.highlightCard}>{children}</div>
}
