import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { useState } from "react";
import API from "../../services/api";
import { Container, Botoes } from "../../styledComponents/CompraCardStyle";

const CompraCard = () =>{

    const { compraContext, itemCompraContext, userContext, allPokemonsContext } = useContext(GlobalContext);

    const { setCompra } = compraContext;

    const { itemCompra, setItemCompra} = itemCompraContext;

    const { user } = userContext

    const { allPokemons } = allPokemonsContext

    const [body, setBody] = useState([]);
 
    const concat =[];

    function pokeFilter(item){
       const result = allPokemons.filter((_,index) => index === item);
       concat.push(result);
    }

    function bodyProvider(array){
        array = array.flat()
        const result = array.map(ell => {
          if( ell.name === user.pokemon.name){
            return {name: user.pokemon.name, quantity: user.pokemon.quantity + 1}
          } else
          return {name: ell.name, quantity: 1}})
        return result;
    }
    
    const envia =() =>{
      
      const transacao = {
        pokemon: body,
        credits: user.credits,
      }

      API.patch(`/users/${localStorage.getItem("userID")}`, transacao,{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).catch((err) => console.log(err));
    }

    const handleclick2 = () =>{
        setCompra(false)
        setItemCompra([])
    }

    const handleclick1 = () => {
      itemCompra.forEach(number => pokeFilter(number))
      setBody([...user.pokemon, ...bodyProvider(concat)])
      envia()
      setCompra(false)
  };

    return(<>
        <Container>
            <span>Tem certeza que quer comprar?</span>
            <img src={require("../../image/cards.png")} alt="img" />
            <Botoes>
            <button onClick={handleclick1}>SIM</button>
            <button onClick={handleclick2}>NÃO</button>
            </Botoes>
        </Container>
    </>)

}
export default CompraCard;