import { useGlobalStoreContext } from "../../store/GlobalStore";
import { Button } from "@mui/material";
import { getAllNbaTeams } from "../../utils";
import { GlobalActions, Team } from "../../types";


const UpdateTeamsButton = () => {

  const {dispatch} = useGlobalStoreContext()

  const handleClick = async () => {
    const teams:Team[] = await getAllNbaTeams()
    dispatch({action: GlobalActions.UPDATE_TEAMS, payload:teams})
  }

  return (
    <Button onClick={handleClick}>
      GET ALL NBA TEAMS
    </Button>
  );
};

export default UpdateTeamsButton;
