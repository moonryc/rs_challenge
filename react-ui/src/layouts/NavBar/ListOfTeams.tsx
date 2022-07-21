import React from 'react'
import styles from './navBar.module.scss'
import SingleTeam from '../../components/SingleTeam'
import { Team } from '../../types'

interface ListOfTeamsProps {
  teams: Team[] | []
  selectedTeam: Team | null
  handleTeamClick: (team: Team) => void
  teamIdError: number | null
}

const ListOfTeams = ({
  teams,
  selectedTeam,
  handleTeamClick,
  teamIdError,
}: ListOfTeamsProps) => {
  if (!teams.length) {
    return <div />
  }

  return (
    <nav className={styles.nav}>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <SingleTeam
              team={team}
              isSelected={selectedTeam?.id === team.id}
              handleClick={handleTeamClick}
              isError={team.id === teamIdError}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ListOfTeams
