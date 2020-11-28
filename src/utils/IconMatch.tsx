// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
const weatherCodes = {
  200: 'thunderstorm',
  201: 'thunderstorm',
  202: 'thunderstorm',
  210: 'thunderstorm',
  211: 'thunderstorm',
  212: 'thunderstorm',
  221: 'thunderstorm',
  230: 'thunderstorm',
  231: 'thunderstorm',
  232: 'thunderstorm',
  300: 'lightRain',
  301: 'lightRain',
  302: 'lightRain',
  310: 'lightRain',
  311: 'lightRain',
  312: 'lightRain',
  313: 'lightRain',
  314: 'lightRain',
  321: 'lightRain',
  500: 'lightRain',
  501: 'heavyRain',
  502: 'heavyRain',
  503: 'heavyRain',
  504: 'heavyRain',
  511: 'sleet',
  520: 'shower',
  521: 'shower',
  522: 'shower',
  531: 'shower',
  600: 'snow',
  601: 'snow',
  602: 'snow',
  611: 'sleet',
  612: 'sleet',
  613: 'sleet',
  615: 'sleet',
  616: 'sleet',
  620: 'snow',
  621: 'snow',
  622: 'snow',
  701: 'heavyCloud',
  711: 'heavyCloud',
  721: 'heavyCloud',
  731: 'heavyCloud',
  741: 'heavyCloud',
  751: 'heavyCloud',
  761: 'heavyCloud',
  762: 'heavyCloud',
  771: 'thunderstorm',
  781: 'thunderstorm',
  800: 'clear',
  801: 'lightCloud',
  802: 'lightCloud',
  803: 'heavyCloud',
  804: 'heavyCloud',
}

export default function IconMatch(weatherId: number): string {
  const weatherIcon = Object.entries(weatherCodes).find(
    (entry) => Number(entry[0]) === weatherId,
  )

  if (weatherIcon) {
    return weatherIcon[1]
  }
  return 'clear'
}
