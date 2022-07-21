import { useGlobalStoreContext } from '../../store/GlobalStore'
import { Grid } from '@mui/material'
import WindWeather from '../../components/WindWeather'
import styles from  './displayWeather.module.scss'
import WeatherOverview from '../../components/WeatherOverview'
import CurrentWeather from '../../components/CurrentWeather'


const DisplayWeather = () => {

  const {state} = useGlobalStoreContext()
  const { isMetric, weather} = state
  const currentWeather = weather?.current

  if(weather===null){
    return <div/>
  }



  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} lg={7}>
            <WeatherOverview weather={weather}/>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
            <WindWeather currentWeather={currentWeather!} isMetric={isMetric}/>
        </Grid>
        <Grid item xs={12}>
              <CurrentWeather currentWeather={currentWeather!} isMetric={isMetric}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayWeather;
