import { ButtonDismont, Card, Container, Trash } from "../../styledComponents/ModalDashBoard"

const ModalDashBoard = ({obj,userPokemon,setCard,card}) => {
    return(
        <Container display={String(card)}>
            <Card color={obj?.display}>
            <Trash onClick={(e)=>{e.preventDefault();setCard(false)}}>X</Trash>
            <img src={obj?.sprites.front_default} alt=""/>
                    <div>  
                    <h3>{obj?.name}</h3>
                    <img className="type" src={require("../../image/image.png")} alt="imgType"/>
                    <span>Raridade</span>
                    </div>
            </Card>
            <ButtonDismont disabled={userPokemon?.filter(e => e.name === obj?.name && e.quantity > 1).length > 0 ? false : true}>Desmontar</ButtonDismont>
        </Container>
    )
}

export default ModalDashBoard