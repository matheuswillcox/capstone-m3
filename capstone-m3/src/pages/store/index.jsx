import { Container } from "../../styledComponents/styledStore";

const Store = () => {
  return (
    <Container>
      <div className="divContainer">
        <div className="loja">Loja</div>
        <div className="packs" onClick={()=>{console.log("clicou")}}>
          <div className="card">
            <div>Pack</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
          <div className="card">
            <div>Pack</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
          <div className="card">
            <div>Pack</div>
            <img src={require("../../image/cards.png")} alt="img" />
            <div>Preço R$ 99.99</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Store;
