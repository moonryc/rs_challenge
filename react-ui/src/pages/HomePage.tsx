import ListOfTeams from "../layouts/ListOfTeams";
import styles from "./HomePage.module.scss";
import DisplayWeather from "../layouts/DisplayWeather";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.teams}>
        <ListOfTeams />
      </div>
      <div className={styles.weather}>
        <DisplayWeather/>
      </div>
    </div>
  );
};

export default HomePage;
