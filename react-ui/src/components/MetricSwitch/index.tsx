import React from 'react'
import { FormControlLabel, Switch } from '@mui/material'
import { GlobalActions } from '../../types'
import { useGlobalStoreContext } from '../../store/GlobalStore'
import styles from './metricSwitch.module.scss'

const MetricSwitch = () => {
  const { state, dispatch } = useGlobalStoreContext()
  const { isMetric } = state
  const classes = {
    thumb: styles['MuiSwitch-thumb'],
    track: isMetric ? styles['MuiSwitch-track'] : null,
    sizeSmall: styles['MuiSwitch-track'],
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            value={isMetric}
            classes={classes}
            onClick={() => dispatch({ action: GlobalActions.TOGGLE_UNIT_TYPE })}
          />
        }
        label='Metric'
      />
    </div>
  )
}

export default MetricSwitch
