import styles from './HomePage.module.scss'
import DisplayWeather from '../layouts/DisplayWeather'
import NavBar from '../layouts/NavBar'
import { Grid } from '@mui/material'

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={12} md={3} className={styles.teams}>
          <NavBar />
        </Grid>
        <Grid container  item xs={12} md={9} className={styles.weather} justifyContent={"center"} alignItems={'center'}>
          <DisplayWeather />
        </Grid>
      </Grid>
    </div>

  )
}

export default HomePage
