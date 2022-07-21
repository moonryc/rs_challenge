import styles from './singleTeam.module.scss'
import { Team } from '../../types'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

interface TeamProps {
  team:Team
  isSelected:boolean
  isError:boolean
  handleClick(team:Team):void
}

const SingleTeam = ({team,isSelected,handleClick,isError}:TeamProps) => {
  const { full_name} = team
  const [clicked, setClicked] = useState(false)

  const handlePress = () => {
    handleClick(team)
    setClicked(true)
  }

  return (
    <Typography onClick={handlePress} onAnimationEnd={()=>setClicked(false)} variant={'h6'} className={`${styles.root} ${isSelected && styles.selected} ${isError && clicked && styles.shake}`}>
      {full_name}
    </Typography>
  );
};

export default React.memo(SingleTeam);
