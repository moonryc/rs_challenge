import { Team } from "./nbaTypes";
import { IAction, Weather } from './index'
import { Dispatch } from "react";


export interface GlobalStoreContextType{
  state:GlobalState,
  dispatch: Dispatch<IAction<GlobalActions>>
}

export interface GlobalState {
  teams:Team[]|[]
  weather:Weather|null
  isMetric:boolean
}

export enum GlobalActions {
  UPDATE_TEAMS,
  UPDATE_WEATHER,
  TOGGLE_UNIT_TYPE
}
