import { createContext, useState } from "react";
import { getPokemons } from "../contexts/pokemonsFunctions"
import { getTrades } from "../contexts/tradesFunctions"


export const GlobalContext = createContext([])

export const GlobalProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(localStorage.getItem("token") || "")

    const userContext = {userToken, setUserToken}

    //

    const [allPokemons, setAllPokemons] = useState([])

    const allPokemonsContext = { allPokemons, setAllPokemons, getPokemons }

    //

    const [trades, setTrades] = useState([])

    const tradesContext = {trades, setTrades, getTrades}

    //Aqui estarão os contextos criados por todos.
    
    return (
        <GlobalContext.Provider
            value={{ userContext, allPokemonsContext, tradesContext }}>
	        {children}
        </GlobalContext.Provider>
    )
}