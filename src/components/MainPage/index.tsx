import React, { FC, useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import styles from './MainPage.module.css'
import { IconButton } from '../IconButton'
import { WeatherCard } from '../WeatherCard'
import { WeatherList } from '../WeatherList'
import { HighlightList } from '../HighlightList'
import { WindStatusCard } from '../WindStatusCard'
import { HumidityCard } from '../HumidityCard'
import { VisibilityCard } from '../VisibilityCard'
import { AirPressureCard } from '../AirPressureCard'

interface IMainPage {
  weatherData: {
    current: {
      humidity: number
      pressure: number
      wind_speed: number
      wind_deg: number
      visibility: number
    }
    daily: { dt: number; temp: { min: number; max: number } }[]
  }
}

export const MainPage: FC<IMainPage> = ({ weatherData }) => {
  const appContext = useContext(AppContext)

  const metricVisibility = weatherData.current
    ? weatherData.current.visibility / 1000
    : 0
  const imperialVisibility = weatherData.current
    ? Math.round(weatherData.current.visibility / 1609)
    : 0

  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.metricButtons}>
          <IconButton
            name="celsius"
            on={appContext.units === 'metric'}
            onClick={() => {
              appContext.setUnits('metric')
            }}
          />
          <IconButton
            name="fahrenheit"
            on={appContext.units === 'imperial'}
            onClick={() => {
              appContext.setUnits('imperial')
            }}
          />
        </div>
        <WeatherList>
          <WeatherCard
            date={
              new Date(weatherData.daily ? weatherData.daily[1].dt * 1000 : 0)
            }
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={
              weatherData.daily && Math.round(weatherData.daily[1].temp.max)
            }
            temperatureLowest={
              weatherData.daily && Math.round(weatherData.daily[1].temp.min)
            }
            temperatureSize="small"
            units={appContext.units}
          />
          <WeatherCard
            date={
              new Date(weatherData.daily ? weatherData.daily[2].dt * 1000 : 0)
            }
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={
              weatherData.daily && Math.round(weatherData.daily[2].temp.max)
            }
            temperatureLowest={
              weatherData.daily && Math.round(weatherData.daily[2].temp.min)
            }
            temperatureSize="small"
            units={appContext.units}
          />
          <WeatherCard
            date={
              new Date(weatherData.daily ? weatherData.daily[3].dt * 1000 : 0)
            }
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={
              weatherData.daily && Math.round(weatherData.daily[3].temp.max)
            }
            temperatureLowest={
              weatherData.daily && Math.round(weatherData.daily[3].temp.min)
            }
            temperatureSize="small"
            units={appContext.units}
          />
          <WeatherCard
            date={
              new Date(weatherData.daily ? weatherData.daily[4].dt * 1000 : 0)
            }
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={
              weatherData.daily && Math.round(weatherData.daily[4].temp.max)
            }
            temperatureLowest={
              weatherData.daily && Math.round(weatherData.daily[4].temp.min)
            }
            temperatureSize="small"
            units={appContext.units}
          />
          <WeatherCard
            date={
              new Date(weatherData.daily ? weatherData.daily[5].dt * 1000 : 0)
            }
            formatString="eee d MMM"
            icon="heavyCloud"
            iconSize="small"
            temperatureHighest={
              weatherData.daily && Math.round(weatherData.daily[5].temp.max)
            }
            temperatureLowest={
              weatherData.daily && Math.round(weatherData.daily[5].temp.min)
            }
            temperatureSize="small"
            units={appContext.units}
          />
        </WeatherList>
        <HighlightList>
          <WindStatusCard
            units={appContext.units}
            value={weatherData.current ? weatherData.current.wind_speed : 0}
            degrees={weatherData.current ? weatherData.current.wind_deg : 0}
          />
          <HumidityCard
            value={weatherData.current ? weatherData.current.humidity : 0}
            percentage={weatherData.current ? weatherData.current.humidity : 0}
          />
          <VisibilityCard
            value={
              appContext.units === 'metric'
                ? metricVisibility
                : imperialVisibility
            }
            units={appContext.units}
          />
          <AirPressureCard
            value={weatherData.current ? weatherData.current.pressure : 0}
          />
        </HighlightList>
        <footer>Built by Stanley Thijssen, Hana Tokumoto & Peter Hanley</footer>
      </div>
    </main>
  )
}
