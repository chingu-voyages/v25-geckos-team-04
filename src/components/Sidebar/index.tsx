import React, { FC, useContext } from 'react'
import styles from './Sidebar.module.css'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { WeatherIcon } from '../WeatherIcon'
import { WeatherTitle } from '../WeatherTitle'
import { Temperature } from '../Temperature'
import { DateComponent } from '../DateComponent'
import { CurrentPlace } from '../CurrentPlace'
import { AppContext } from '../../contexts/AppContext'
import { IconMatch } from '../../utils/IconMatch'

interface ISidebar {
  updateWeatherByCurrentLocation: () => void
  weatherData: {
    name: string
    main: { temp: number }
    weather: { main: string; id: number }[]
    sys: { country: string }
  }
}

export const Sidebar: FC<ISidebar> = ({
  weatherData,
  updateWeatherByCurrentLocation,
}) => {
  const appContext = useContext(AppContext)

  return (
    <aside
      className={styles.container}
      style={
        appContext.showSearchSidebar
          ? { display: 'none' }
          : { display: 'block' }
      }
    >
      <div className={styles.navigationHeader}>
        <Button
          onClick={() => {
            appContext.setShowSearchSidebar(true)
          }}
        >
          Search for places
        </Button>
        <IconButton name="gps" onClick={updateWeatherByCurrentLocation} />
      </div>
      <div className={styles.weatherIconContainer}>
        <div className={styles.weatherIcon}>
          <WeatherIcon
            icon={weatherData.weather && IconMatch(weatherData.weather[0].id)}
            size="full"
          />
        </div>
      </div>
      <Temperature
        value={weatherData.main ? Math.round(weatherData.main.temp) : 0}
        units={appContext.units}
      />
      <WeatherTitle
        value={weatherData.weather ? weatherData.weather[0].main : ''}
      />
      <div className={styles.footer}>
        Today • <DateComponent date={new Date()} formatString="eee, dd MMM" />
        <br />
        <CurrentPlace
          place={
            weatherData.name
              ? `${weatherData.name}, ${weatherData.sys.country}`
              : ''
          }
        />
      </div>
    </aside>
  )
}
