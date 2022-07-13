import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../providers/global"
import { StyledTradeCard } from "../../styledComponents/StyledHomeTrades"
import {Container, Botoes}from "../../styledComponents/modal-delete"
import { StyledPokemonTradeCard } from "../../styledComponents/StyledPokemonTradeCard"
import { TbArrowsLeftRight } from "react-icons/tb"
import API from "../../services/api"
import { toast } from "react-toastify"


const TradeCard = ({ offered, wanted, userID, tradeID, tradeUser, tradeUserImg, tradePokes, exchange }) => {

    const [offeredCard, setOfferedCard] = useState({})
    const [wantedCard, setWantedCard] = useState({})

    const { userContext, allPokemonsContext, tradesContext } = useContext(GlobalContext)

    const { user, userToken, setUser } = userContext

    const { allPokemons } = allPokemonsContext
    const [showModal, setShowModal] = useState(false)

    const { getTrades, trades, setTrades } = tradesContext
    
    useEffect(()=>{

        const offeredPoke = allPokemons.find((pokemon) => pokemon?.name === offered)
        const wantedPoke = allPokemons.find((pokemon) => pokemon?.name === wanted)

        setOfferedCard(offeredPoke)
        setWantedCard(wantedPoke)

    },[offered, wanted])

    useEffect(() => {
        getTrades(userToken, setTrades)
    }, []) 
    

    const DeleteRequest = (Id) =>{
        API.delete(`troca/${Id}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
        }).then(res => {
            toast.success("Concluído!")
            setTimeout(() => {
            }, 1000);})
    }
    const handleclick2 = (e) =>{

        const newTrades = trades.filter((trade) => trade.id !== tradeID)

        setTrades(newTrades)

        const attPokemons = []

        user.pokemon?.map((poke) => {
        if(poke.name === offered) {
            attPokemons.push({name:poke.name ,quantity: poke.quantity + 1})
        }else{
            attPokemons.push(poke)
        }
        })

        API.patch(`users/${user.id}`, {pokemon: attPokemons}, {
                headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {
        setUser(res.data)
        localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
        })

        DeleteRequest(tradeID)
    }

    const handleAcceptTrade = () => {

        const pokeToTrade = user.pokemon.find((poke) => poke?.name === wanted)

        const tradeConditional = pokeToTrade && pokeToTrade.quantity > 1 ? true : false

        const attTrades = tradeConditional && trades.filter((trade) => {
            if(trade.id === tradeID){
                return trade.exchange = true
            }
            else{
                return trade
            }
        })

        tradeConditional && setTrades(attTrades)

        const newUserPokes = []

        let alreadyHas = false

        tradeConditional && user.pokemon.map((poke) => {

            console.log(alreadyHas)

            if(poke.name === pokeToTrade.name){
                newUserPokes.push({name: poke.name, quantity: poke.quantity - 1})
            }
            if(poke.name === offered){
                newUserPokes.push({name: offered, quantity: poke.quantity + 1})
                alreadyHas = true
            }
            if(poke.name !== offered && poke.name !== wanted){
                newUserPokes.push(poke)
            } 
            
        })

        if(!alreadyHas){
            newUserPokes.push({name: offered, quantity: 1})
        }

        !tradeConditional && toast.error(`Você deve ter mais de 1 ${wanted} para realizar a troca`)

        tradeConditional && API.patch(`users/${user.id}`, {pokemon: newUserPokes}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {
            setUser(res.data)
            localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
            toast.success("Troca Realizada!")
        })

        tradeConditional && !exchange && API.patch(`troca/${tradeID}`, {exchange: true}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        
    }

    const handleConcludeTrade = () => {

        const attPokemon = []
        let alreadyHas = false

        user.pokemon.map((poke) => {
            if(poke.name === wanted){
                attPokemon.push({name: poke.name, quantity: poke.quantity + 1})
                alreadyHas = true
            }
            if(poke.name !== wanted){
                attPokemon.push(poke)
            }
        })

        if(!alreadyHas){
            attPokemon.push({name: wanted, quantity: 1})
        }

        API.patch(`users/${user.id}`, {pokemon: attPokemon}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {
            setUser(res.data)
            localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
        })
        const teste = []

        const newTrades = trades.filter((trade) => trade.id !== tradeID)

        setTrades(newTrades)

        DeleteRequest(tradeID)

    }

    /*const doidera = () => {

        API.patch(`users/${user.id}`, {pokemon: [{name:"charmander", quantity: 100}]}, {
            headers: {Authorization: `Bearer ${userToken}`}
        })
        .then((res) => {
            setUser(res.data)
            localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
            console.log(res)
        })
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
                exchange ?
                <button onClick={()=> {handleConcludeTrade()}} className="receiveTrade-btn">Receber</button>
                :<button onClick={() => {setShowModal(true)}} className="deleteTrade-btn">Excluir</button> 
                : 
                exchange ?
                <button className="deleteTrade-btn" disabled style={{"cursor": "default"}}>Bloqueado</button>
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
