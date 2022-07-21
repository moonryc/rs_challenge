import { useGlobalStoreContext } from '../../store/GlobalStore'
import UpdateTeamsButton from '../../components/UpdateTeamsButton'
import styles from './navBar.module.scss'
import { useCallback, useReducer } from 'react'
import { GlobalActions, IAction, Team } from '../../types'
import { getAllNbaTeams, getCurrentCityWeather } from '../../utils'
import { MenuOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import ListOfTeams from './ListOfTeams'
import NavDrawer from './NavDrawer'

enum NavBarActions {
  SET_TEAM_ERROR_ID,
  SET_FETCH_TEAMS_ERROR_TRUE,
  SET_FETCH_TEAMS_ERROR_FALSE,
  UPDATE_SELECTED_TEAM,
  TOGGLE_DRAWER_OPEN,
  TOGGLE_DRAWER_CLOSE,
}

interface NavBarState {
  teamErrorId: number | null
  fetchTeamsError: boolean
  selectedTeam: Team | null
  isDrawerOpen: boolean
}

const initialState: NavBarState = {
  teamErrorId: null,
  fetchTeamsError: false,
  selectedTeam: null,
  isDrawerOpen: false,
}

const reducer = (
  state: NavBarState,
  { action, payload = null }: IAction<NavBarActions>
): NavBarState => {
  switch (action) {
    case NavBarActions.SET_FETCH_TEAMS_ERROR_TRUE:
      return { ...state, fetchTeamsError: true }
    case NavBarActions.SET_FETCH_TEAMS_ERROR_FALSE:
      return { ...state, fetchTeamsError: false }
    case NavBarActions.SET_TEAM_ERROR_ID:
      return { ...state, teamErrorId: payload }
    case NavBarActions.TOGGLE_DRAWER_OPEN:
      return { ...state, isDrawerOpen: true }
    case NavBarActions.TOGGLE_DRAWER_CLOSE:
      return { ...state, isDrawerOpen: false }
    case NavBarActions.UPDATE_SELECTED_TEAM:
      return { ...state, selectedTeam: payload }
    default:
      return state
  }
}

const NavBar = () => {
  const { state, dispatch } = useGlobalStoreContext()
  const { teams } = state

  const [navBarState, navBarDispatch] = useReducer(reducer, initialState)
  const { selectedTeam, fetchTeamsError, teamErrorId, isDrawerOpen } =
    navBarState

  const handleUpdateTeams = useCallback(async () => {
    try {
      const newTeams: Team[] | null = await getAllNbaTeams()
      if (!newTeams) {
        throw new Error('Error fetching NBA Teams')
      }
      dispatch({ action: GlobalActions.UPDATE_TEAMS, payload: newTeams })
      navBarDispatch({ action: NavBarActions.SET_FETCH_TEAMS_ERROR_FALSE })
    } catch (e) {
      navBarDispatch({ action: NavBarActions.SET_FETCH_TEAMS_ERROR_TRUE })
    }
  }, [dispatch])
  const handleTeamClick = useCallback(
    async (team: Team) => {
      const { city, id } = team
      try {
        const weather = await getCurrentCityWeather(city)
        if (!weather) {
          throw Error('error contacting server')
        }
        dispatch({ action: GlobalActions.UPDATE_WEATHER, payload: weather })
        navBarDispatch({
          action: NavBarActions.UPDATE_SELECTED_TEAM,
          payload: team,
        })
        navBarDispatch({ action: NavBarActions.TOGGLE_DRAWER_CLOSE })
      } catch (e) {
        navBarDispatch({ action: NavBarActions.SET_TEAM_ERROR_ID, payload: id })
      }
    },
    [dispatch]
  )
  const toggleDrawerHandler = useCallback(async () => {
    if (isDrawerOpen) {
      return navBarDispatch({ action: NavBarActions.TOGGLE_DRAWER_CLOSE })
    }
    await handleUpdateTeams()
    navBarDispatch({ action: NavBarActions.TOGGLE_DRAWER_OPEN })
  }, [handleUpdateTeams, isDrawerOpen])

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <IconButton className={styles.icon} onClick={toggleDrawerHandler}>
          <MenuOutlined fontSize={'large'} />
        </IconButton>
        <h1>NBA Weather</h1>
      </header>
      {/*DESKTOP VIEW*/}
      <div className={styles.teamsDesktop}>
        <UpdateTeamsButton
          handleClick={handleUpdateTeams}
          isError={fetchTeamsError}
        />
        <ListOfTeams
          teams={teams}
          selectedTeam={selectedTeam}
          handleTeamClick={handleTeamClick}
          teamIdError={teamErrorId}
        />
      </div>
      {/*MOBILE VIEW*/}
      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawerClose={toggleDrawerHandler}
        teams={teams}
        selectedTeam={selectedTeam}
        handleTeamClick={handleTeamClick}
        teamIdError={teamErrorId}
      />
    </div>
  )
}

export default NavBar
