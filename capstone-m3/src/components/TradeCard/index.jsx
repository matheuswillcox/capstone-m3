import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../providers/global"
import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"
import { StyledPokemonTradeCard } from "../../styledComponents/StyledPokemonTradeCard"
import { TbArrowsLeftRight } from "react-icons/tb"
import API from "../../services/api"
import { toast } from "react-toastify"


const TradeCard = ({ offered, wanted, userID, tradeID, tradeUser, tradeUserImg }) => {

    const [offeredCard, setOfferedCard] = useState({})
    const [wantedCard, setWantedCard] = useState({})

    const { userContext, allPokemonsContext } = useContext(GlobalContext)

    const { user } = userContext

    const { allPokemons } = allPokemonsContext

    
    
    useEffect(()=>{

        const offeredPoke = allPokemons.find((pokemon) => pokemon.name === offered)
        const wantedPoke = allPokemons.find((pokemon) => pokemon.name === wanted)

        setOfferedCard(offeredPoke)
        setWantedCard(wantedPoke)

    },[offered, wanted])
    

    const DeleteRequest = (Id) =>{
        API.delete(`troca/${Id}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
        }).then(res => {
            toast.success("Oferta de troca excluida")
            setTimeout(() => {
                window.location.reload()
            }, 1000);})
    }


    return (
        <StyledTradeCard>
            <div className="redLine"></div>
            <div className="userInfo">
                <img src={tradeUserImg} alt="userImg"></img>
                <h3>{tradeUser}</h3>
            </div>
            <StyledPokemonTradeCard>
                <img src={offeredCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{offeredCard.name}</h3>
            </StyledPokemonTradeCard>
            <div className="arrowTrade">
                <TbArrowsLeftRight className="arrowTrade-arrow"></TbArrowsLeftRight>
            </div>
            <StyledPokemonTradeCard>
                <img src={wantedCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{wantedCard.name}</h3>
            </StyledPokemonTradeCard>
            {userID === user.id ? 
            <button onClick={() => {DeleteRequest(tradeID)}} className="deleteTrade-btn">Excluir</button> 
            : 
            <button onClick={() => {console.log(offeredCard)}} className="acceptTrade-btn">Aceitar troca</button>}
        </StyledTradeCard>
        
    )
}

export default TradeCard
