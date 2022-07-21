import {Team} from "../../types";

export const getAllNbaTeams = async ():Promise<Team[]|null> => {
    try{
        const response = await fetch('/api/nba/teams')
        if(!response.ok){
            throw new Error('BAD RESPONSE : ' + response.status)
        }
        return (await response.json()).data as Team[]
    }catch (e) {
        console.log(e)
        return null
    }
}
