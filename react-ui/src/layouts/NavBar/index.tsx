import { useGlobalStoreContext } from '../../store/GlobalStore'
import SingleTeam from '../../components/SingleTeam'
import UpdateTeamsButton from '../../components/UpdateTeamsButton'
import styles from './navBar.module.scss'
import { useCallback, useState } from 'react'
import { GlobalActions, Team } from '../../types'
import { getAllNbaTeams, getCurrentCityWeather } from '../../utils'
import { MenuOutlined } from '@mui/icons-material'
import { Drawer, IconButton } from '@mui/material'

const NavBar = () => {
  const { state, dispatch } = useGlobalStoreContext()
  const { teams } = state
  const [teamIdError, setTeamIdError] = useState<number | null>(null)
  const [updateTeamsError, setUpdateTeamsError] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const handleUpdateTeams = useCallback(async () => {
    try{
      const teams: Team[]|null = await getAllNbaTeams()
      if(!teams){
        throw new Error('Error fetching NBA Teams')
      }
      dispatch({ action: GlobalActions.UPDATE_TEAMS, payload: teams })
    }catch (e) {
      setUpdateTeamsError(true)
    }
  }, [dispatch])
  const handleTeamClick = useCallback(async (team: Team) => {
    const { city, id } = team
    try {
      const weather = await getCurrentCityWeather(city)
      if (!weather) {
        throw Error('error contacting server')
      }
      dispatch({ action: GlobalActions.UPDATE_WEATHER, payload: weather })
      setSelectedTeam(team)
      setDrawerIsOpen(false)
    } catch (e) {
      setTeamIdError(id)
    }
  }, [dispatch])
  const GenerateList = useCallback(() => {
    if (!teams.length) {
      return <div />
    }
    return (
      <nav className={styles.nav}>
        <ul>
          {teams.map(team => <li key={team.id}><SingleTeam team={team}
                                             isSelected={selectedTeam?.id === team.id}
                                             handleClick={handleTeamClick}
                                             isError={team.id === teamIdError} /></li>,
          )}
        </ul>
      </nav>
    )
  }, [handleTeamClick, selectedTeam?.id, teamIdError, teams])
  const toggleDrawerHandler = async () => {
    if(drawerIsOpen){
      return setDrawerIsOpen(false)
    }
    await handleUpdateTeams()
    setDrawerIsOpen(true)
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <IconButton className={styles.icon} onClick={toggleDrawerHandler}>
          <MenuOutlined fontSize={'large'}  />
        </IconButton>
        <h1>NBA Weather</h1>
      </header>
      <div className={styles.teamsDesktop}>
        <UpdateTeamsButton handleClick={handleUpdateTeams} isError={updateTeamsError} />
        <GenerateList />
      </div>
      <Drawer className={styles.drawer} anchor={'left'} open={drawerIsOpen}
              onClose={() => setDrawerIsOpen(prevState => !prevState)}>
        <GenerateList />
      </Drawer>

    </div>
  )
}

export default NavBar
