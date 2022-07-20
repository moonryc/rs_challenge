import { useEffect, useState } from "react";
import { useGlobalStoreContext } from "../../store/GlobalStore";
import { getCurrentCityWeather } from "../../utils";
import { Weather } from "../../types";
import { FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";
import WindWeather from "../../components/WindWeather";
import styles from './displayWeather.module.scss'
import WeatherOverview from "../../components/WeatherOverview";


const DisplayWeather = () => {

  const {state} = useGlobalStoreContext()
  const { selectedTeam=null} = state

  const [weatherState, setWeatherState] = useState<Weather|null>(null);



  useEffect(()=>{
    if(selectedTeam !== null){
      const {city} = selectedTeam
      getCurrentCityWeather(city).then(data=>setWeatherState(data))
    }
  },[selectedTeam])

  useEffect(()=>{
    console.log(weatherState)
  },[weatherState])


  if(weatherState===null){
    return <div/>
  }

  const {current} = weatherState
  const {condition} = current

  return (
    <div>
      <Grid sx={{flexGrow:1}} container spacing={2}>
        <Grid item xs={12} md={6} lg={6} className={styles.modules}>
          <WindWeather {...current}/>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={styles.modules}>
          <WeatherOverview icon_url={condition.icon} weatherCondition={condition.text}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayWeather;
