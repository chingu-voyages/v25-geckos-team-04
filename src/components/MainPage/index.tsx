import React, { FC } from 'react'
import styles from './MainPage.module.css'

import { IconButton } from '../IconButton'
import { WeatherCard } from '../WeatherCard'
import { WeatherList } from '../WeatherList'

import { HighlightList } from '../HighlightList'
import { WindStatusCard } from '../WindStatusCard'
import { HumidityCard } from '../HumidityCard'
import { VisibilityCard } from '../VisibilityCard'
import { AirPressureCard } from '../AirPressureCard'

export const MainPage: FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.metricButtons}>
          <IconButton name="celsius" on={true} />
          <IconButton name="fahrenheit" on={false} />
        </div>
        <WeatherList>
          <WeatherCard
            date={new Date()}
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={15}
            temperatureLowest={15}
            temperatureSize="small"
            metric="celsius"
          />
          <WeatherCard
            date={new Date()}
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={15}
            temperatureLowest={15}
            temperatureSize="small"
            metric="celsius"
          />
          <WeatherCard
            date={new Date()}
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={15}
            temperatureLowest={15}
            temperatureSize="small"
            metric="celsius"
          />
          <WeatherCard
            date={new Date()}
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={15}
            temperatureLowest={15}
            temperatureSize="small"
            metric="celsius"
          />
          <WeatherCard
            date={new Date()}
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={15}
            temperatureLowest={15}
            temperatureSize="small"
            metric="celsius"
          />
        </WeatherList>
        <HighlightList>
          <WindStatusCard metric="celsius" value={7} />
          <HumidityCard value={84} />
          <VisibilityCard value={6.4} metric="celsius" />
          <AirPressureCard value={998} />
        </HighlightList>
        <footer>Built by Stanley Thijssen, Hana Tokumoto & Peter Hanley</footer>
      </div>
    </main>
  )
}
