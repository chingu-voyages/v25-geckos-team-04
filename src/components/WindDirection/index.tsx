import React, { FC } from 'react'
import NavigationIcon from '@material-ui/icons/Navigation'
import styles from './WindDirection.module.css'

interface IWindDirection {
  degrees: number
}

// http://snowfence.umn.edu/Components/winddirectionanddegrees.htm
const windDirectionValues = {
  NNE: [11.25, 33.75],
  NE: [33.75, 56.25],
  ENE: [56.25, 78.75],
  E: [78.75, 101.25],
  ESE: [101.25, 123.75],
  SE: [123.75, 146.25],
  SSE: [146.25, 168.75],
  S: [168.75, 191.25],
  SSW: [191.25, 213.75],
  SW: [213.75, 236.25],
  WSW: [236.25, 258.75],
  W: [258.75, 281.25],
  WNW: [281.25, 303.75],
  NW: [303.75, 326.25],
  NNW: [326.25, 348.75],
}

function getDirection(deg: number): string {
  const windDir = Object.entries(windDirectionValues).find(
    (entry) => entry[1][0] <= deg && deg <= entry[1][1],
  )

  if (windDir) {
    return windDir[0]
  }
  return 'N'
}

export const WindDirection: FC<IWindDirection> = ({ degrees }) => {
  const direction = getDirection(degrees)

  return (
    <div className={styles.direction}>
      <div className={styles.icon}>
        <NavigationIcon style={{ transform: `rotate(${degrees}deg)` }} />
      </div>
      <div className={styles.text}>{direction}</div>
    </div>
  )
}
