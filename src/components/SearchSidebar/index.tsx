import React, { FC } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import styles from './SearchSidebar.module.css'
import { Input } from '../Input'
import { Button } from '../Button'

export const SearchSidebar: FC = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.top}>
        <button className={styles.closeButton} type="button" onClick={(e) => e}>
          <CloseIcon fontSize="large" />
        </button>
      </div>
      <div className={styles.search}>
        <Input
          isSearchInput={true}
          placeholder="search location"
          value=""
          onChange={() => {}}
        />
        <Button color="accent" onClick={(e) => e}>
          Search
        </Button>
      </div>
    </aside>
  )
}
