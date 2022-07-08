import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../providers/global"
import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"
import { StyledPokemonTradeCard } from "../../styledComponents/StyledPokemonTradeCard"
import { TbArrowsLeftRight } from "react-icons/tb"


const TradeCard = ({ offered, wanted, userID, tradeID, tradeUser, tradeUserImg }) => {

    const [offeredCard, setOfferedCard] = useState({})
    const [wantedCard, setWantedCard] = useState({})

    const { userContext, allPokemonsContext } = useContext(GlobalContext)

    const { user } = userContext

    const { allPokemons } = allPokemonsContext

    const cardToTrade = allPokemons.find((pokemon) => {
        return pokemon.name === offered
    })

    const cardToGet = allPokemons.find((pokemon) => {
        return pokemon.name === wanted
    })

    useEffect(() => {

        axios.get(cardToTrade.url).then((response) => {setOfferedCard(response.data)})
        axios.get(cardToGet.url).then((response) => {setWantedCard(response.data)})

    }, [])


    return (
        <StyledTradeCard>
            <div className="redLine"></div>
            <div className="userInfo">
                <img src={tradeUserImg} alt="userImg"></img>
                <h3>{tradeUser}</h3>
            </div>
            <StyledPokemonTradeCard>
                <img src={offeredCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{offered}</h3>
            </StyledPokemonTradeCard>
            <div className="arrowTrade">
                <TbArrowsLeftRight className="arrowTrade-arrow"></TbArrowsLeftRight>
            </div>
            <StyledPokemonTradeCard>
                <img src={wantedCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{wanted}</h3>
            </StyledPokemonTradeCard>
            {userID === user.id ? 
            <button onClick={() => {console.log(user.id, userID)}} className="deleteTrade-btn">Excluir</button> 
            : 
            <button onClick={() => {console.log(user.id, userID)}} className="acceptTrade-btn">Aceitar troca</button>}
        </StyledTradeCard>
        
    )
}

export default TradeCard
