import { Team } from "./nbaTypes";
import { IAction } from "./index";
import { Dispatch } from "react";


export interface GlobalStoreContextType{
  state:GlobalState,
  dispatch: Dispatch<IAction<GlobalActions>>
}

export interface GlobalState {
  teams:Team[]|[]
  selectedTeam:Team|null
}

export enum GlobalActions {
  UPDATE_TEAMS,
  UPDATE_SELECTED_TEAM
}
