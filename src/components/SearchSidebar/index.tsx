import React, { FC, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import styles from './SearchSidebar.module.css'
import { Input } from '../Input'
import { Button } from '../Button'
import { CitySearchList } from '../CitySearchList'
import { CityLink } from '../CityLink'

interface ISearchSidebar {
  hideSearchSidebar: () => void
  citySearchString: string
  setCitySearchString: (arg0: string) => void
  citySearchResults: { name: string; id: number; sys: { country: string } }[]
}

export const SearchSidebar: FC<ISearchSidebar> = (props) => {
  return (
    <aside className={styles.container}>
      <div className={styles.top}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={props.hideSearchSidebar}
        >
          <CloseIcon fontSize="large" />
        </button>
      </div>
      <div className={styles.search}>
        <Input
          isSearchInput={true}
          placeholder="search location"
          value={props.citySearchString}
          onChange={(e) => props.setCitySearchString(e.currentTarget.value)}
        />
        <Button color="accent" onClick={(e) => e}>
          Search
        </Button>
      </div>
      <CitySearchList>
        {props.citySearchResults.map(
          (city: { id: number; name: string; sys: { country: string } }) => (
            <CityLink
              key={city.id}
              city={city.name}
              country={city.sys.country}
              onClick={() => {}}
            />
          ),
        )}
      </CitySearchList>
    </aside>
  )
}
