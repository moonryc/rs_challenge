import { useGlobalStoreContext } from "../../store/GlobalStore";
import SingleTeam from "../../components/SingleTeam";
import UpdateTeamsButton from "../../components/UpdateTeamsButton";
import styles from "./listOfTeams.module.scss";
import { useCallback } from "react";
import { GlobalActions, Team } from '../../types'

const ListOfTeams = () => {
  const { state, dispatch } = useGlobalStoreContext();
  const { teams, selectedTeam } = state;

  const handleTeamClick = useCallback((team:Team) => {
    dispatch({ action: GlobalActions.UPDATE_SELECTED_TEAM, payload: team });
  }, [dispatch]);


  return (
    <div className={styles.root}>
      <UpdateTeamsButton />
      <div className={styles.teams}>
        {teams.length > 0 && teams.map(team => <SingleTeam key={team.id} team={team}
                                                           isSelected={selectedTeam?.id === team.id}
                                                           handleClick={handleTeamClick}
        />)}
      </div>
    </div>
  );
};

export default ListOfTeams;
