import React, { FC } from 'react'
import styles from './HighlightCard.module.css'
// import { WindDirection } from './WindDirection'
// import { HumidityChart } from './HumidityChart'

interface IHighlightCard {
  name: 'Wind Status' | 'Humidity' | 'Visibility' | 'Air Pressure'
  metric?: 'celcius' | 'fahrenheit'
  value: number
  windDirDeg?: number
}

export const HighlightCard: FC<IHighlightCard> = ({
  name,
  metric = 'celcius',
  value,
  windDirDeg = 0,
}) => {
  let measurement = ''

  if (metric === 'celcius' && name === 'Wind Status') {
    measurement = 'km/h'
  } else if (metric === 'fahrenheit' && name === 'Wind Status') {
    measurement = 'mph'
  } else if (metric === 'celcius' && name === 'Visibility') {
    measurement = 'km'
  } else if (metric === 'fahrenheit' && name === 'Visibility') {
    measurement = 'miles'
  } else if (name === 'Humidity') {
    measurement = '%'
  } else if (name === 'Air Pressure') {
    measurement = 'mb'
  }

  return (
    <div className={styles.highlightcard}>
      <div className={styles.title}>{name}</div>
      <div className={styles.main}>
        <span className={styles.value}>{value}</span>
        {measurement}
      </div>
      {/* {name === 'Wind Status' && <WindDirection degrees={windDirDeg} />} */}
      {/* {name === 'Humidity' && <HumidityChart value={value} />} */}
    </div>
  )
}

// <HighlightCard name={Wind Status} metric={celcius} value={7} windDirDeg={180} />
// // <HighlightCard name={Air Pressure} value={998} />
