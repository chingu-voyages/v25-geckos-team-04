<<<<<<< HEAD
import React, { FC } from 'react'
import styles from './HighlightCard.module.css'

interface IHighlightCard {
  children: React.ReactNode
}

export const HighlightCard: FC<IHighlightCard> = ({ children }) => {
  return <div className={styles.highlightCard}>{children}</div>
}
||||||| parent of 29cf6bd (Split inner content of Highlight Card into four sub-components)
=======
import React, { FC } from 'react'
import styles from './HighlightCard.module.css'

interface IHighlightCard {
  children: React.ReactNode
}

export const HighlightCard: FC<IHighlightCard> = ({ children }) => {
  return <div className={styles.highlightcard}>{children}</div>
}
>>>>>>> 29cf6bd (Split inner content of Highlight Card into four sub-components)
