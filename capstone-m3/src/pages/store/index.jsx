import { Headersite } from "../../components/header";
import { Container } from "../../styledComponents/styledStore";
import { useCallback, useContext } from "react";
import { GlobalContext } from "../../providers/global";
import CompraCard from "../../components/CompraCard";

const Store = () => {
  const { compraContext, itemCompraContext, themeContext, allPokemonsContext } =
    useContext(GlobalContext);

  const { themeSelector } = themeContext;

  const { compra, setCompra } = compraContext;

  const { setItemCompra } = itemCompraContext;

  const normal = [
    2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 24, 26, 28, 30, 31, 33,
    34, 36, 38, 40, 42, 44, 45, 47, 49, 51, 53, 55, 57, 59, 61, 62, 64, 65, 67,
    68, 70, 71, 73, 75, 76, 78, 80, 82, 85, 87, 89, 91, 93, 94, 97, 99, 101,
    103, 105, 110, 112, 115, 117, 119, 121, 130, 131, 132, 133, 134, 135, 136,
    137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
  ];

  const rare = [3, 6, 9, 144, 145, 146, 149, 150, 151];

  const handleclick = () => {
    shuffleCards(normal);
    setCompra(true);
  };

  const shuffleCards = useCallback((arrayProtectedIds) => {
    const result = [];

    for (let i = 0; i <= 9; i++) {
      const shuffledNumber = Math.floor(Math.random() * 150) + 1;

      if (arrayProtectedIds.includes(shuffledNumber)) {
        i--;
        continue;
      } else {
        result.push(shuffledNumber);
      }
    }
    console.log(result);
  }, []);

  const geraCards = () => {
    const array = [];
    for (let i = 0; i <= 9; i++) {
      const result = Math.floor(Math.random() * 150);
      array.push(result);
    }
    setItemCompra(array);
  };

  return (
    <>
      <Container theme={themeSelector}>
        <Headersite />
        <div className="divContainer">
          <div className="loja">Loja</div>
          <div className="packs">
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
