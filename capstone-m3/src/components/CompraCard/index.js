import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import styled from "styled-components"


const Container = styled.div`
    width: 370px;
    height: 345px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    border-radius: 4px;
    box-shadow: 0 0 1em black;
`
const Botoes = styled.div`
    width: 200px;
    display:flex;
    justify-content: space-between;
`


const CompraCard = () =>{

    const { compraContext, itemCompraContext } = useContext(GlobalContext);

    const { compra, setCompra } = compraContext;

    const { itemCompra, setItemCompra} = itemCompraContext;

    const handleclick2 = () =>{
        setCompra(false)
        setItemCompra("")
        console.log(compra)
    }

    return(<>
        <Container>
            <span>Tem certeza que quer comprar?</span>
            <Botoes>
            <button onClick={handleclick2}>SIM</button>
            <button onClick={handleclick2}>NÃO</button>
            </Botoes>
        </Container>
    </>)

}
export default CompraCard;