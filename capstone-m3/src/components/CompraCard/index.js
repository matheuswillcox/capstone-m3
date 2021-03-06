import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { useState } from "react";
import API from "../../services/api";
import { Container, Botoes } from "../../styledComponents/CompraCardStyle";
import { toast } from "react-toastify"

const CompraCard = () =>{

    const { compraContext, itemCompraContext, userContext, allPokemonsContext, CardModalContext } = useContext(GlobalContext);

    const { setCompra } = compraContext;

    const { itemCompra, setItemCompra, packType} = itemCompraContext;

    const { setShowModal, setNewCards } = CardModalContext

    const { user, userToken, setUser } = userContext

    const { allPokemons } = allPokemonsContext

    const [body, setBody] = useState([]);

    const [userPokes , setUserPokes] = useState(user.pokemon)
 
    const randomCards =[];

    function bodyProvider(array){
        array = array.flat()
        const result = array.map(ell => {
          if( ell.name === user.pokemon.name){
            return {name: ell.name, quantity: ell.quantity + 1}
          } else
          return {name: ell.name, quantity: 1}})
        return result;
    }
    
    const envia =(userNewPokes) =>{
      
      const transacao = {
        pokemon: userNewPokes,
        credits: user.credits - packType
      }


      setShowModal(true)

      API.patch(`/users/${localStorage.getItem("userID")}`, transacao,{
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Compra realizada!")
        setUser(res.data)
        localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
      })

    }

    const handleclick2 = () =>{
        setCompra(false)
        setItemCompra([])
    }

    const handleclick1 = () => {

      const canBuy = user.credits >= packType ? true : false

      allPokemons.filter((poke ,index) => {
        for(let i = 0; i < itemCompra.length; i++){
          if(poke.id === itemCompra[i]){
            randomCards.push(poke)
          }
        }
      });

      const toSum = randomCards

      const toReceive = []

      for(let i = 0; i < toSum.length; i++){
        let count = 0
        for(let j = 0; j < toSum.length; j++){
          if(toSum[i].name === toSum[j].name){
            count += 1
          }
        }
        toReceive.push({name: toSum[i].name, quantity: count})
      }

      const filteredToReceive = [toReceive[0]]

      for(let i = 0; i < toReceive.length; i++){
        let cond = true

        for(let j = 0; j < filteredToReceive.length; j++){
          if(toReceive[i].name === filteredToReceive[j].name){
            cond = false
          }
        }

        if(cond){
          filteredToReceive.push(toReceive[i])
        }
      }

      const userPokes = []
      setNewCards(filteredToReceive)

      if(user.pokemon.length > 0){
        for(let i = 0; i < user.pokemon.length; i++){
          const userPoke = user.pokemon[i]
          let totalCount = userPoke.quantity

          for(let j = 0; j < filteredToReceive.length; j++){
            const pokeToGain = filteredToReceive[j]

            if(userPoke.name === pokeToGain.name){
              totalCount += pokeToGain.quantity
            }
          }

          userPokes.push({name: userPoke.name, quantity: totalCount})

        }
      }

      const newPokes = []
 

      for(let i = 0; i < filteredToReceive.length; i++){

        const pokeToGain = filteredToReceive[i]
        let cond = true

        for(let j = 0; j < user.pokemon.length; j++){

          const userPoke = user.pokemon[j]

          if(pokeToGain.name === userPoke.name){
            cond = false
          }
        }

        if(cond){
          newPokes.push({name: pokeToGain.name, quantity: pokeToGain.quantity})
        }
      }

      const attPokemons = userPokes.concat(newPokes)
      
      canBuy ? envia(attPokemons) : toast.error("Cr??ditos insuficientes")
      setCompra(false)
  };

    return(<>
        <Container>
            <span>Tem certeza que quer comprar?</span>
            <img src={require("../../image/cards.png")} alt="img" />
            <Botoes>
            <button onClick={handleclick1}>SIM</button>
            <button onClick={handleclick2}>N??O</button>
            </Botoes>
        </Container>
    </>)

}
export default CompraCard;