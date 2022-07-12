import { Headersite } from "../../components/header"
import { Container } from "../../styledComponents/styledStore";
import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import CompraCard from "../../components/CompraCard";
import { GiCardPick, GiGems } from "react-icons/gi";

const Store = () => {

  const { compraContext, itemCompraContext, themeContext } = useContext(GlobalContext);

  const { themeSelector } = themeContext

  const { compra, setCompra } = compraContext;

  const  { setItemCompra } = itemCompraContext;

  const handleclick = () =>{
    geraCards()
    setCompra(true)
  }

  const geraCards = () =>{
    const array = [];
    for (let i= 0; i<= 9; i++){
      const result = Math.floor(Math.random() * 129)
      array.push(result);
    }
    setItemCompra(array);
  }

  return (<>
    <Container theme={themeSelector}>
      <Headersite/>
      <div className="divContainer">
        <div className="loja">Loja</div>
        <div className="packs" >
          <div className="card" onClick={handleclick}>
            <div>Pack Comum</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div><GiGems color="#42B4E5" /> <span>500</span></div>
          </div>
          <div className="card" >
            <div>Pack Raro</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div><GiGems color="#42B4E5" /> <span>2000</span></div>
          </div>
          <div className="card" >
            <div>Pack Lendário</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div><GiGems color="#42B4E5" /> <span>6000</span></div>
          </div>
        </div>
      </div>
      {compra && <CompraCard></CompraCard>}
    </Container>
    </>
  );
};

export default Store;
