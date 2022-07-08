import { useEffect } from "react";
import { useContext } from "react"
import { GlobalContext } from "../../providers/global";
import { StyledTradesDiv } from "../../styledComponents/StyledHomeTrades";
import TradeCard from "../TradeCard";


export const TradesList =  ()  => {

    const { allPokemonsContext, userContext, tradesContext } = useContext(GlobalContext)

    const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

    const { userToken, user } = userContext

    const { getTrades, trades, setTrades } = tradesContext

    

    useEffect(()=> {
        getPokemons(allPokemons, setAllPokemons)
    }, [])

    useEffect(() => {
        getTrades(userToken, setTrades)
    }, [])

    return (

        <StyledTradesDiv>
            <ul className="tradesList">
                {trades?.map((trade, index) => 
                <TradeCard key={index} offered={trade.pokemon.offered} wanted={trade.pokemon.wanted}
                userID={trade.userID} tradeID={trade.id} tradeUser={trade.userName} tradeUserImg={trade.img}></TradeCard>)}
            </ul>
        </StyledTradesDiv>
    )
}

export default TradesList
