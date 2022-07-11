import axios from "axios";
import { useEffect, useState } from "react";
import { Container, DivStyled } from "../../styledComponents/modal-minigame";

export const Minigame = () => {
  const [pokemons, setPokemons] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0a")
      .then((res) => setPokemons(res.data.results));
  }, []);
  console.log(pokemons);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        teste Minigame
      </button>
      {showModal && (
        <Container>
          <div className="popup">
            <span>Quem e esse pokemon???</span>
            <DivStyled>
              <figure>
                <img src={pokemons[0].sprites?.front_default} alt="pokemon" />
              </figure>
            </DivStyled>
          </div>
        </Container>
      )}
    </>
  );
};
