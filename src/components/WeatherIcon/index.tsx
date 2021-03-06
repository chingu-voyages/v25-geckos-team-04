import React, { FC } from 'react'
import { IMAGES } from './WeatherIcons'

interface IWeatherIcon {
  size?: 'small' | 'big' | 'full'
  icon: keyof typeof IMAGES
}

const SIZES = {
  small: 62,
  big: 234,
  full: '100%',
}

export const WeatherIcon: FC<IWeatherIcon> = ({ icon, size = 'small' }) => {
  return (
    <img
      max-width="auto"
      height={SIZES[size]}
      alt={`${icon} - icon`}
      src={IMAGES[icon]}
    />
  )
}
