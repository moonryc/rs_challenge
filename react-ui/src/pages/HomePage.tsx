import styles from './HomePage.module.scss'
import DisplayWeather from '../layouts/DisplayWeather'
import NavBar from '../layouts/NavBar'
import { Grid } from '@mui/material'

const HomePage = () => {
  return (
    <Grid container className={styles.root}>
      <Grid item xs={12} md={4} lg={3} className={styles.navbar}>
        <NavBar />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        lg={9}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <DisplayWeather />
      </Grid>
    </Grid>
  )
}

export default HomePage
