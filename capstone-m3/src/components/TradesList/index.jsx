import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react"
import { GlobalContext } from "../../providers/global";
import { StyledTradesDiv } from "../../styledComponents/StyledHomeTrades";
import TradeCard from "../TradeCard";


export const TradesList =  ()  => {

    const [tradeSearch, setTradeSearch] = useState("")

    const [filteredTrades, setFilteredTrades] = useState([])

    const { allPokemonsContext, userContext, tradesContext } = useContext(GlobalContext)

    const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

    const { userToken, user } = userContext

    const { getTrades, trades, setTrades } = tradesContext

    useEffect(() => {

        const filtered = trades.filter((trade) => {
            return trade.pokemon.offered.toLowerCase().includes(tradeSearch.toLowerCase())
        })

        tradeSearch === ""  ? setFilteredTrades([]) : setFilteredTrades(filtered)

    }, [tradeSearch]) 

    useEffect(()=> {
        
    }, [allPokemons])

    useEffect(() => {
        getTrades(userToken, setTrades)
    }, []) 

    return (

        <StyledTradesDiv>
            <ul className="tradesList">
                <div className="tradesList-divInput">
                    <input 
                    className="tradesList-input"
                    placeholder="Filtre o pokemon desejado"
                    onChange={(e) => {setTradeSearch(e.target.value)}} 
                    />
                    <button onClick={() => {console.log(user)}}>addTrade</button>
                    {/* aqui vai o botão para adicionar a nova troca */}
                </div>
                {tradeSearch !==  "" ?
                (filteredTrades?.map((filteredTrade, index) => 
                <TradeCard key={index} offered={filteredTrade.pokemon.offered} 
                wanted={filteredTrade.pokemon.wanted}
                userID={filteredTrade.userID} tradeID={filteredTrade.id} 
                tradeUser={filteredTrade.userName} tradeUserImg={filteredTrade.img}
                tradePokes={filteredTrade.userPokemons} exchange={filteredTrade.exchange}></TradeCard>))
                :
                (trades?.map((trade, index) => 
                <TradeCard key={index} offered={trade?.pokemon?.offered} wanted={trade?.pokemon?.wanted}
                userID={trade.userID} tradeID={trade.id} tradeUser={trade.userName} tradeUserImg={trade.img}
                tradePokes={trade.userPokemons} exchange={trade.exchange} ></TradeCard>))}
            </ul>
        </StyledTradesDiv>
    )
}

export default TradesList
