import { FormControlLabel, Grid, Switch, Typography } from '@mui/material'
import styles from './weatherOverview.module.scss'
import { GlobalActions, Weather, WeatherCurrent, WeatherLocation } from '../../types'
import React from 'react'
import { useGlobalStoreContext } from '../../store/GlobalStore'

interface WeatherOverviewProps {
  weather: Weather
}

const WeatherOverview = ({ weather }: WeatherOverviewProps) => {
  const { uv, last_updated, condition: { icon: icon_url, text: weatherCondition } } = weather.current
  const { tz_id: timeZone, localtime, region } = weather.location

  const { state, dispatch } = useGlobalStoreContext()
  const { isMetric } = state

  return (
    <Grid container className={styles.root} alignItems={'center'}>
      {/*TODO: COME BACK AND FIX THIS*/}
      <FormControlLabel
        className={styles.toggleRoot}
        control={<Switch className={styles.unitToggle} value={isMetric}
                         onClick={() => dispatch({ action: GlobalActions.TOGGLE_UNIT_TYPE })} />}
        label='Metric' />
      <Grid container item xs={12} md={6} justifyContent={'center'}>
        <img src={icon_url} className={styles.picture} alt={'weather icon status'} />
      </Grid>
      <Grid container item xs={12} md={6} direction={'column'} justifyContent={'space-around'} className={styles.info}>
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
