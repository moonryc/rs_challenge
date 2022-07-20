import { Typography } from "@mui/material";
import styles from './weatherOverview.module.scss'

interface WeatherOverviewProps {
  icon_url:string
  weatherCondition:string
}

const WeatherOverview = ({icon_url,weatherCondition}:WeatherOverviewProps) => {

  return (
    <div className={styles.root}>
            <img src={icon_url}/>
            <Typography className={styles.condition}>{weatherCondition}</Typography>
    </div>
  );
};

export default WeatherOverview;
