import { GlobalActions, GlobalState, IAction } from "../types";
import { useReducer } from "react";



const reducer = (state:GlobalState,{action, payload=null}:IAction<GlobalActions>):GlobalState => {
  switch (action) {
    case GlobalActions.UPDATE_TEAMS:
      return {...state, teams:payload}
    case GlobalActions.UPDATE_SELECTED_TEAM:
      return {...state, selectedTeam:payload}
    default:
      return state
  }
}

export const useGlobalStoreReducer=(initialState:GlobalState)=> useReducer(reducer, initialState);
