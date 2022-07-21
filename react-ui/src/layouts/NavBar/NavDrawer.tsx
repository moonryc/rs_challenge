import React from 'react'
import styles from './navBar.module.scss'
import ListOfTeams from './ListOfTeams'
import { Drawer } from '@mui/material'
import { Team } from '../../types'

interface NavDrawerProps {
  isDrawerOpen: boolean
  toggleDrawerClose: () => void
  teams: Team[]
  selectedTeam: Team | null
  handleTeamClick: (team: Team) => void
  teamIdError: number | null
}

const NavDrawer = ({
  isDrawerOpen,
  toggleDrawerClose,
  teams,
  teamIdError,
  selectedTeam,
  handleTeamClick,
}: NavDrawerProps) => {
  return (
    <Drawer
      className={styles.drawer}
      anchor={'left'}
      open={isDrawerOpen}
      onClose={toggleDrawerClose}
    >
      <ListOfTeams
        teams={teams}
        selectedTeam={selectedTeam}
        handleTeamClick={handleTeamClick}
        teamIdError={teamIdError}
      />
    </Drawer>
  )
}

export default NavDrawer
