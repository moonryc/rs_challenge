import { Weather } from '../../types'

export const getCurrentCityWeather = async (
  cityName: string
): Promise<Weather | null> => {
  const url = `/api/weather/city/${cityName}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('BAD RESPONSE : ' + response.status)
    }
    return (await response.json()) as Weather
  } catch (e) {
    return null
  }
}
