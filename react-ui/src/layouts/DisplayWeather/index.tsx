import { useEffect, useState } from "react";
import { useGlobalStoreContext } from "../../store/GlobalStore";
import { getCurrentCityWeather } from "../../utils";
import { Weather } from "../../types";
import { FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";
import WindWeather from "../../components/WindWeather";
import styles from './displayWeather.module.scss'
import WeatherOverview from "../../components/WeatherOverview";
import CurrentWeather from '../../components/CurrentWeather'


const DisplayWeather = () => {

  const {state} = useGlobalStoreContext()
  const { isMetric, weather} = state
  const currentWeather = weather?.current

  if(weather===null){
    return <div/>
  }



  return (

      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} lg={6}>
          <div className={styles.modules}>
            <WeatherOverview weather={weather}/>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.modules}>
            <WindWeather currentWeather={currentWeather!} isMetric={isMetric}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.modules}>
              <CurrentWeather currentWeather={currentWeather!} isMetric={isMetric}/>
          </div>
        </Grid>
      </Grid>

  );
};

export default DisplayWeather;
