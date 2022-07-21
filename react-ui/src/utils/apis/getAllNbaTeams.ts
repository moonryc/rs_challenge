import {Team} from "../../types";

export const getAllNbaTeams = async ():Promise<Team[]|null> => {

    try{
        const response = await fetch('/api/nba/teams')
        if(!response.ok){
            throw new Error('BAD RESPONSE : ' + response.status)
        }

        const data = (await response.json()).data as Team[]

        console.log(data)

        return data

    }catch (e) {
        console.log(e)
        return null
    }
}
