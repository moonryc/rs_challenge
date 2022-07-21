import {
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import styles from './windWeather.module.scss'
import { GlobalActions, WeatherCurrent } from '../../types'
import { useGlobalStoreContext } from '../../store/GlobalStore'
import DegreeSymbol from '../DegreeSymbol'

interface WindWeatherProps {
  currentWeather:WeatherCurrent
  isMetric:boolean
}


const WindWeather = ({ currentWeather,isMetric }: WindWeatherProps) => {
  const {gust_kph, wind_degree, wind_kph, wind_dir, wind_mph, gust_mph} = currentWeather

  const gust = isMetric ? `${gust_kph} kph` : `${gust_mph} mph`;
  const wind = isMetric ? `${wind_kph} kph` : `${wind_mph} mph`;

  const data = [
    { name: "Gust", value: gust },
    { name: "Wind", value: wind },
    { name: "Wind Degree", value: wind_degree },
    { name: "Wind Direction", value: wind_dir }];


  return (
    <div>
      <TableContainer className={styles.root}>
        <Table aria-label="simple table">
          <TableHead>
          <TableRow component={"th"}>
            <TableCell className={styles.headerCell}>Wind</TableCell>
            <TableCell/>
          </TableRow>
            </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.value} {row.name==="Wind Degree" && <DegreeSymbol isTemperature={false}/>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default React.memo(WindWeather);
