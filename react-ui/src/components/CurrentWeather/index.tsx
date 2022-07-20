import React, { useState } from 'react'
import { WeatherCurrent } from '../../types'
import DegreeSymbol from '../DegreeSymbol'
import { Grid } from '@mui/material'


interface CurrentWeatherProps {
  currentWeather: WeatherCurrent
  isMetric:boolean
}


const CurrentWeather = ({ currentWeather,isMetric }: CurrentWeatherProps) => {
  const {
    temp_f,
    temp_c,
    cloud,
    feelslike_c,
    feelslike_f,
    humidity,
    vis_km,
    vis_miles,
    pressure_mb,
    pressure_in,
  } = currentWeather


  const temperature = isMetric ? temp_c : temp_f
  const feelsLike = isMetric ? feelslike_c : feelslike_f
  const visibility = isMetric ? `${vis_km} km`  : `${vis_miles} miles`
  const pressure = isMetric ? `${pressure_mb} mb` : `${pressure_in} in`

  return (
    <Grid container>
      <Grid item xs={12} md={4}>Temperature: {temperature} <DegreeSymbol isMetric={isMetric} isTemperature/></Grid>
      <Grid item xs={12} md={4}>Feels like: {feelsLike} <DegreeSymbol isMetric={isMetric} isTemperature/></Grid>
      <Grid item xs={12} md={4}>Visibility: {visibility}</Grid>
      <Grid item xs={12} md={4}>Pressure: {pressure}</Grid>
      <Grid item xs={12} md={4}>Clouds: {cloud}%</Grid>
      <Grid item xs={12} md={4}>Humidity: {humidity}</Grid>
    </Grid>
  )
}

export default CurrentWeather
