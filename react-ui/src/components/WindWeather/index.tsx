import {
  FormControlLabel, Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { useState } from "react";
import styles from "./windWeather.module.scss";

interface WindWeatherProps {
  gust_kph: number;
  gust_mph: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}


const WindWeather = ({ gust_kph, wind_degree, wind_kph, wind_dir, wind_mph, gust_mph }: WindWeatherProps) => {

  const [isMetric, setIsMetric] = useState<boolean>(false);

  const gust = isMetric ? `${gust_kph} kph` : `${gust_mph} mph`;
  const wind = isMetric ? `${wind_kph} kph` : `${wind_mph} mph`;

  const data = [{ name: "gust", value: gust }, { name: "wind", value: wind }, {
    name: "Wind Degree",
    value: wind_degree
  }, { name: "Wind Direction", value: wind_dir }];


  return (
    <div>
      <TableContainer className={styles.root}>
        <Table aria-label="simple table">
          <TableHead>
          <TableRow component={"th"}>
            <TableCell className={styles.headerCell}>Wind</TableCell>
            <TableCell align={'right'}>
            <FormControlLabel
              control={<Switch className={styles.unitToggle} value={isMetric} onClick={() => setIsMetric(prevState => !prevState)} />}
              label="Metric" />
            </TableCell>
          </TableRow>
            </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};

export default React.memo(WindWeather);
