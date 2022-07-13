import { ButtonDismont, Card, Container, Trash, Double } from "../../styledComponents/ModalDashBoard"
import API from "../../services/api"
import { toast } from "react-toastify"
import { GlobalContext } from "../../providers/global";
import { useContext } from "react";

const ModalDashBoard = ({obj,userPokemon,setCard,card}) => {
    const { themeContext } = useContext(GlobalContext)
    const { themeSelector } = themeContext
    console.log(obj)
    console.log(userPokemon)
    
    const pokemonFind = userPokemon?.pokemon.filter(e => e === obj?.name)
    
    const desmontar = {
        credits: userPokemon?.credits + 50,
        pokemon: [{name: obj?.name, quantity: pokemonFind[0]?.quantity - 1}]
    }

const handleSubmit = () => {
        API.patch(`/users/${localStorage.getItem("userID")}`, desmontar,{
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }).then(res=>toast.success("Desmontada Com Sucesso")).catch((err) => console.log(err));
    }

    return(
        <Container display={String(card)}>
            <Card color={obj?.display} raridade={obj?.base_experience}>
            {/* <p>{pokemonFind[0]?.quantity ? pokemonFind[0].quantity : "0"}X</p> */}
            <Trash onClick={(e)=>{e.preventDefault();setCard(false)}}>X</Trash>
            <img src={obj?.sprites.front_default} alt=""/>
                    <div>  
                    <h3>{obj?.name}</h3>
                    {obj?.type.length > 1 ?<Double><img className="type" src={obj && require(`../../image/${obj?.types[0]?.type.name}.png`)} alt="imgType"/>
                    <img className="type" src={obj && require(`../../image/${obj?.types[1].type.name}.png`)} alt="imgType"/></Double>
                    :<img className="type" src={obj && require(`../../image/${obj?.types[0].type.name}.png`)} alt="imgType"/>}
                    <span>Raridade</span>
                    </div>
            </Card>
            <ButtonDismont theme={themeSelector} onClick={(event)=>{event.preventDefault();handleSubmit()}} disabled={userPokemon?.pokemon.filter(e => e.name === obj?.name && e.quantity > 1).length > 0 ? false : true}>Desmontar</ButtonDismont>
        </Container>
    )
}

export default ModalDashBoard