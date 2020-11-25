import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { WeatherIcon } from '../WeatherIcon'
import { WeatherTitle } from '../WeatherTitle'
import { Temperature } from '../Temperature'
import { DateComponent } from '../DateComponent'
import { CurrentPlace } from '../CurrentPlace'

export const Sidebar: FC = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.navigationHeader}>
        <Button onClick={() => console.log('Hello')}>Search for places</Button>
        <IconButton name="gps" />
      </div>
      <div className={styles.weatherIconContainer}>
        <div className={styles.weatherIcon}>
          <WeatherIcon icon="shower" size="full" />
        </div>
      </div>
      <Temperature value={15} />
      <WeatherTitle value="Shower" />
      <div className={styles.footer}>
        Today • <DateComponent date={new Date()} formatString="eee, dd MMM" />
        <br />
        <CurrentPlace place="Hong Kong" />
      </div>
    </aside>
  )
}
