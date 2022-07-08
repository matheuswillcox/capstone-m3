import { createContext, useState } from "react";
import { getPokemons } from "../contexts/pokemonsFunctions"
import { getTrades } from "../contexts/tradesFunctions"


export const GlobalContext = createContext([])

export const GlobalProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(localStorage.getItem("token") || "")
    const [user, setUser] = useState({})

    const userContext = {userToken, setUserToken, user, setUser}

    //

    const [allPokemons, setAllPokemons] = useState([])

    const allPokemonsContext = { allPokemons, setAllPokemons, getPokemons }

    //

    const [trades, setTrades] = useState([])

    const tradesContext = {trades, setTrades, getTrades}

    //

    const [compra, setCompra] = useState(false)

    const compraContext = {compra, setCompra}

    //

    const [itemCompra, setItemCompra]= useState("")

    const itemCompraContext = {itemCompra, setItemCompra}

    //Aqui estarão os contextos criados por todos.
    
    return (
        <GlobalContext.Provider
            value={{ userContext, allPokemonsContext, tradesContext, compraContext, itemCompraContext }}>
	        {children}
        </GlobalContext.Provider>
    )
}