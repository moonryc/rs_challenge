import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import styles from './windWeather.module.scss'
import { WeatherCurrent } from '../../../types'
import DegreeSymbol from '../../DegreeSymbol'

interface WindWeatherProps {
  currentWeather: WeatherCurrent
  isMetric: boolean
}

const WindWeather = ({ currentWeather, isMetric }: WindWeatherProps) => {
  const { gust_kph, wind_degree, wind_kph, wind_dir, wind_mph, gust_mph } =
    currentWeather

  const gust = isMetric ? `${gust_kph} kph` : `${gust_mph} mph`
  const wind = isMetric ? `${wind_kph} kph` : `${wind_mph} mph`

  return (
    <div>
      <TableContainer className={styles.root}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow className={styles.headerRow}>
              <TableCell className={styles.headerCell}>Wind</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                Gust
              </TableCell>
              <TableCell align='right'>{gust}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Wind
              </TableCell>
              <TableCell align='right'>{wind}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Wind Degree
              </TableCell>
              <TableCell align='right'>
                {wind_degree} <DegreeSymbol isTemperature={false} />{' '}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component='th' scope='row'>
                Wind Direction
              </TableCell>
              <TableCell align='right'>{wind_dir}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default React.memo(WindWeather)
