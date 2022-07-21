import { Grid, Typography } from '@mui/material'
import styles from './weatherOverview.module.scss'
import { Weather } from '../../types'
import React from 'react'
import MetricSwitch from '../MetricSwitch'
import { format } from 'date-fns'

interface WeatherOverviewProps {
  weather: Weather
}

const WeatherOverview = ({ weather }: WeatherOverviewProps) => {
  const {
    uv,
    condition: { icon: icon_url, text: weatherCondition },
  } = weather.current
  const { tz_id: timeZone, region } = weather.location
  const localtime = format(new Date(weather.location.localtime), 'h:mm aa')
  const last_updated = format(
    new Date(weather.current.last_updated),
    "LLL do 'at' h:mm aa"
  )

  return (
    <Grid container className={styles.root} alignItems={'center'}>
      <div className={styles.toggleRoot}>
        <MetricSwitch />
      </div>
      <Grid container item xs={12} md={4} justifyContent={'center'} spacing={2}>
        <img
          src={icon_url}
          className={styles.picture}
          alt={'weather icon status'}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        direction={'column'}
        justifyContent={'space-around'}
        className={styles.info}
      >
        <Typography>UV: {uv}</Typography>
        <Typography>Condition: {weatherCondition}</Typography>
        <Typography>State: {region}</Typography>
        <Typography>Timezone: {timeZone}</Typography>
        <Typography>Local Time: {localtime}</Typography>
        <Typography>Last Updated: {last_updated}</Typography>
      </Grid>
    </Grid>
  )
}

export default WeatherOverview
