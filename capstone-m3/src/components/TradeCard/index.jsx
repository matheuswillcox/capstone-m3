import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../providers/global"
import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"
import {Container, Botoes}from "../../styledComponents/modal-delete"
import { StyledPokemonTradeCard } from "../../styledComponents/StyledPokemonTradeCard"
import { TbArrowsLeftRight } from "react-icons/tb"
import API from "../../services/api"
import { toast } from "react-toastify"


const TradeCard = ({ offered, wanted, userID, tradeID, tradeUser, tradeUserImg, tradePokes, isTraded }) => {

    const [offeredCard, setOfferedCard] = useState({})
    const [wantedCard, setWantedCard] = useState({})

    const { userContext, allPokemonsContext } = useContext(GlobalContext)

    const { user, userToken, setUser } = userContext

    const { allPokemons } = allPokemonsContext
    const [showModal, setShowModal] = useState(false)

    
    
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
    const handleclick2 = (e) =>{
        DeleteRequest(tradeID)
    }

    const handleAcceptTrade = () => {

        const pokeToTrade = user.pokemon.find((poke) => poke.name === wanted)

        const tradeConditional = pokeToTrade && pokeToTrade.quantity > 1 ? true : false

        const newUserPokes = []
        let alreadyHas = false

        tradeConditional && user.pokemon.map((poke) => {

            if(poke.name === pokeToTrade.name){
                newUserPokes.push({name: poke.name, quantity: poke.quantity -= 1})
            }else if(poke.name === offered){
                newUserPokes.push({name: offered, quantity: poke.quantity += 1})
                alreadyHas = true
            }else if(poke.name !== offered && poke.name !== wanted){
                newUserPokes.push(poke)
                if(!alreadyHas){
                    newUserPokes.push({name: offered, quantity: poke.quantity = 1})
                }
            }
        })

        tradeConditional && API.patch(`users/${user.id}`, {pokemon: newUserPokes}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {setUser(res.data)})
        
    }

    const handleReceiveCard = () => {

        const attPokemons = []
        let alreadyHas = false

        user.pokemon.map((poke) => {
            if(poke.name === wanted) {
                attPokemons.push({name: poke.name, quantity: poke.quantity += 1})
                alreadyHas = true
            }
            else if(poke.name !== wanted && poke.name !== offered) {
                attPokemons.push(poke)
                if(!alreadyHas){
                    attPokemons.push({name: wanted, quantity: poke.quantity = 1})
                }
            }
        })

        API.patch(`users/${user.id}`, {pokemon: attPokemons}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {setUser(res.data)})
    }

    /*const doidera = () => {

        API.patch(`users/${user.id}`, {pokemon: {name:"bulbasaur", quantity: 100}}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res)=> {console.log(res)})
        .catch((err) => console.log(err))
    }*/


    return (
        <>
        <StyledTradeCard>
            <div className="redLine"></div>
            <div className="userInfo">
                <img src={tradeUserImg} alt="userImg"></img>
                <h3>{tradeUser}</h3>
            </div>
            <StyledPokemonTradeCard>
                <img src={offeredCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{offeredCard?.name}</h3>
            </StyledPokemonTradeCard>
            <div className="arrowTrade">
                <TbArrowsLeftRight className="arrowTrade-arrow"></TbArrowsLeftRight>
            </div>
            <StyledPokemonTradeCard>
                <img src={wantedCard?.sprites?.front_default} alt="pokimao"></img>
                <h3>{wantedCard?.name}</h3>
            </StyledPokemonTradeCard>
            {userID === user.id ? 
            isTraded ? 
            <button onClick={() => {handleReceiveCard()}} className="acceptTrade-btn">Receber</button> 
            : 
            <button onClick={() => {setShowModal(true)}} className="deleteTrade-btn">Excluir</button> 
            : 
            <button onClick={() => {handleAcceptTrade()}} className="acceptTrade-btn">Aceitar troca</button>}
        </StyledTradeCard>
        {showModal && <Container>
            <div className="popup">
                <span>Tem certeza que quer excluir?</span>
            <Botoes>
                <button onClick={()=>{
                    handleclick2()
                    setTimeout(()=>{
                        setShowModal(false) 
                    }, 2000)
                }} className="acceptDelete-btn">SIM</button>
                <button onClick={()=>{
                    setShowModal(false)
                }}>NÃO</button>
            </Botoes>
            </div>
        </Container>}
    </>
    )
}

export default TradeCard
