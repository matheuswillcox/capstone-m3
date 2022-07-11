import axios from "axios";
import { useEffect, useState } from "react";
import { Container, DivStyled } from "../../styledComponents/modal-minigame";

export const Minigame = () => {
  const [pokemons, setPokemons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPoke, setNewPoke]= useState([])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0a")
      .then((res) => setPokemons(res.data.results));
  }, []);
  
  const sortPoke= ()=>{
    const sortNum = Math.floor(Math.random() * 150)
    console.log(sortNum);
  }

  return (
    <>
      <button
        onClick={() => {
          //setShowModal(true);
          console.log(sortPoke);
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
