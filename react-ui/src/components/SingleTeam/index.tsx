import styles from './singleTeam.module.scss';
import { Team } from "../../types";
import { Paper, Typography } from "@mui/material";
import * as React from "react";

interface TeamProps {
  team:Team
  isSelected:boolean
  handleClick(team:Team):void
}

const SingleTeam = ({team,isSelected,handleClick}:TeamProps) => {
  const { abbreviation,name,full_name,city,conference} = team
  return (
    <Typography onClick={()=>handleClick(team)} variant={'h6'} className={`${styles.root} ${isSelected && styles.selected}`}>
      {full_name}
    </Typography>
  );
};

export default React.memo(SingleTeam);
