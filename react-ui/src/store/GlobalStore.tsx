import { createContext, useContext } from "react";
import { GlobalState, GlobalStoreContextType } from "../types";
import { useGlobalStoreReducer } from "./reducers";



const initialState:GlobalState = {
  teams: [],
  selectedTeam:null
}

const GlobalStoreContext = createContext<GlobalStoreContextType>({ dispatch: ()=>{}, state: initialState })
export const GlobalStore = ({...props})=> {
  const [state,dispatch] = useGlobalStoreReducer(initialState)
  return <GlobalStoreContext.Provider value={{state,dispatch}} {...props} />;
}

export const useGlobalStoreContext = ()=> useContext(GlobalStoreContext);


