import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { WeatherIcon } from '../WeatherIcon'
import { WeatherTitle } from '../WeatherTitle'
import { Temperature } from '../Temperature'
import { DateComponent } from '../DateComponent'
import { CurrentPlace } from '../CurrentPlace'

interface ISidebar {
  showSearchSidebar: () => void
  weatherData: {
    name: string
    main: { temp: number }
    weather: { main: string }[]
  }
}

export const Sidebar: FC<ISidebar> = ({ weatherData, showSearchSidebar }) => {
  return (
    <aside className={styles.container}>
      <div className={styles.navigationHeader}>
        <Button onClick={showSearchSidebar}>Search for places</Button>
        <IconButton name="gps" />
      </div>
      <div className={styles.weatherIconContainer}>
        <div className={styles.weatherIcon}>
          <WeatherIcon icon="shower" size="full" />
        </div>
      </div>
      <Temperature
        value={weatherData.main ? Math.round(weatherData.main.temp) : 0}
      />
      <WeatherTitle
        value={weatherData.weather ? weatherData.weather[0].main : ''}
      />
      <div className={styles.footer}>
        Today • <DateComponent date={new Date()} formatString="eee, dd MMM" />
        <br />
        <CurrentPlace place={weatherData.name ? weatherData.name : ''} />
      </div>
    </aside>
  )
}
