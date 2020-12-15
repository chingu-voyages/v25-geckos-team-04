import React, { FC, useState, useContext } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import styles from './SearchSidebar.module.css'
import { Input } from '../Input'
import { Button } from '../Button'
import { CitySearchList } from '../CitySearchList'
import { CityLink } from '../CityLink'
import { AppContext } from '../../contexts/AppContext'

interface ISearchSidebar {
  setCitySearchString: (value: string) => void
  citySearchResults: {
    list: {
      id: number
      name: string
      coord: { lat: number; lon: number }
      sys: { country: string }
    }[]
  }
}

export const SearchSidebar: FC<ISearchSidebar> = ({
  setCitySearchString,
  citySearchResults,
}) => {
  const appContext = useContext(AppContext)
  const [inputString, setInputString] = useState('')

  return (
    <aside
      className={styles.container}
      style={
        appContext.showSearchSidebar
          ? { display: 'block' }
          : { display: 'none' }
      }
    >
      <div className={styles.top}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={() => {
            appContext.setShowSearchSidebar(false)
          }}
        >
          <CloseIcon fontSize="large" />
        </button>
      </div>
      <div className={styles.search}>
        <Input
          isSearchInput={true}
          placeholder="search location"
          value={inputString}
          onChange={(e) => {
            setInputString(e.currentTarget.value)
          }}
        />
        <Button
          color="accent"
          onClick={() => {
            setCitySearchString(inputString)
          }}
        >
          Search
        </Button>
      </div>
      <CitySearchList>
        {citySearchResults.list &&
          citySearchResults.list.map((city) => (
            <CityLink
              key={city.id}
              city={city.name}
              country={city.sys.country}
              onClick={() => {
                appContext.setLatLon(city.coord)
                appContext.setWeatherByCurrentLocation(false)
                appContext.setShowSearchSidebar(false)
              }}
            />
          ))}
      </CitySearchList>
    </aside>
  )
}
