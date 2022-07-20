import { useGlobalStoreContext } from '../../store/GlobalStore'
import SingleTeam from '../../components/SingleTeam'
import UpdateTeamsButton from '../../components/UpdateTeamsButton'
import styles from './listOfTeams.module.scss'
import { useCallback, useState } from 'react'
import { GlobalActions, Team } from '../../types'
import { getCurrentCityWeather } from '../../utils'

const ListOfTeams = () => {
  const { state, dispatch } = useGlobalStoreContext()
  const { teams } = state

  const [teamIdError, setTeamIdError] = useState<number | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<Team|null>(null)

  const handleTeamClick = useCallback(async (team: Team) => {
    const { city, id } = team
    try {
      const weather = await getCurrentCityWeather(city)
      if (!weather) {
        throw Error('error contacting server')
      }
      dispatch({ action: GlobalActions.UPDATE_WEATHER, payload: weather })
      setSelectedTeam(team)
    } catch (e) {
      setTeamIdError(id)
    }
  }, [dispatch])


  return (
    <div className={styles.root}>
      <UpdateTeamsButton />
      <div className={styles.teams}>
        {teams.length > 0 && teams.map(team => <SingleTeam key={team.id} team={team}
                                                           isSelected={selectedTeam?.id === team.id}
                                                           handleClick={handleTeamClick}
                                                           isError={team.id===teamIdError}
        />)}
      </div>
    </div>
  )
}

export default ListOfTeams
