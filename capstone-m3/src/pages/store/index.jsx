import { Headersite } from "../../components/header"
import { Container } from "../../styledComponents/styledStore";
import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import CompraCard from "../../components/CompraCard";

const Store = () => {

  const { compraContext, itemCompraContext } = useContext(GlobalContext);

  const { compra, setCompra } = compraContext;

  const  { setItemCompra } = itemCompraContext;

  const handleclick = () =>{
    setItemCompra()
    setCompra(true)
  }

  return (<>
    <Container>
      <Headersite/>
      <div className="divContainer">
        <div className="loja">Loja</div>
        <div className="packs" >
          <div className="card" onClick={handleclick}>
            <div>Pack 1</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
          <div className="card" onClick={handleclick}>
            <div>Pack 2</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
          <div className="card" onClick={handleclick}>
            <div>Pack 3</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
        </div>
      </div>
      {compra && <CompraCard></CompraCard>}
    </Container>
    </>
  );
};

export default Store;
