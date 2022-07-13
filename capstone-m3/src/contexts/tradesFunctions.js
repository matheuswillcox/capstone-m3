import API from "../services/api"


export const getTrades = (userToken, setTrades) => {

    const config = {
        headers: {
            "Authorization" : `Bearer ${userToken}`
        }
    }


    API.get("troca", config)
    .then((response)=> {setTrades(response.data)})
}