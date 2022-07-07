import { useEffect } from "react";
import { useContext } from "react"
import { GlobalContext } from "../../providers/global";
import { StyledTradesDiv } from "../../styledComponents/StyledHomeTrades";
import TradeCard from "../TradeCard";


export const TradesList =  ()  => {

    const { allPokemonsContext, userContext, tradesContext } = useContext(GlobalContext)

    const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

    const { userToken } = userContext

    const { getTrades, trades, setTrades } = tradesContext

    
    useEffect(() => {
        getPokemons(allPokemons, setAllPokemons)
    })

    useEffect(() => {
        getTrades(userToken, setTrades)
    }, [trades])

    return (

        <StyledTradesDiv>
            <ul className="tradesList">
                <h1>Trocas</h1>
                {trades?.map((trade, index) => 
                <TradeCard key={index} offered={trade.pokemon.offered} wanted={trade.pokemon.wanted}></TradeCard>)}
                <button onClick={()=> {console.log(trades)}}>teste</button>
            </ul>
        </StyledTradesDiv>
    )
}

export default TradesList
