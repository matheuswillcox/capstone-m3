import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Container, DivStyled } from "../../styledComponents/modal-minigame";
import { GlobalContext } from "../../providers/global";
import API from "../../services/api";

export const Minigame = ({ setShowModal, showModal }) => {
  const [pokemons, setPokemons] = useState([]);
  const [newPoke, setNewPoke] = useState([]);
  const [nomePoke, setNomePoke] = useState("");
  const [color, setColor] = useState("");
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0a")
      .then((res) => setPokemons(res.data.results));
  }, []);

  const sortPoke = () => {
    const sortNum = Math.floor(Math.random() * 150);
    axios.get(pokemons[sortNum].url).then((res) => {
      console.log(res);
      setNewPoke(res.data);
    });
  };
  async function minigameRight(nomePokemon) {
    if (newPoke.species.name.toLowerCase() === nomePokemon.tolowerCase()) {
      const creditsUser = { credits: 0 };
      toast.success("Você acertou");
      setNomePoke("");
      const valor = await API.get(`users/${user.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => {
        return (res.data.credits += 500);
      });
      creditsUser.credits = valor;
      console.log(creditsUser);
      API.patch(`users/${user.id}`, creditsUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res);
    } else {
      toast.error("Você errou");
      setNomePoke("");
      setColor("color");
      setTimeout(() => {
        setColor("");
        setShowModal(false);
      }, 2500);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          sortPoke();
          setShowModal(true);
        }}
      ></button>
      {showModal && (
        <Container style={{ cursor: "default" }}>
          <div className="popup">
            <span>Quem e esse pokemon???</span>

            <figure>
              <img
                src={newPoke.sprites?.front_default}
                alt="pokemon"
                className={color}
              />
            </figure>
            <DivStyled>
              <input
                type="text"
                value={nomePoke}
                placeholder="Pokemon"
                onChange={(e) => {
                  setNomePoke(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  minigameRight(nomePoke);
                }}
              >
                Enviar
              </button>
              <button
                onClick={() => {
                  console.log(newPoke.species.name);
                }}
              >
                trapacear
              </button>
              <button
                onClick={() => {
                   console.log(setShowModal, showModal);
                }}
              >
                aa
              </button>
            </DivStyled>
          </div>
        </Container>
      )}
    </>
  );
};
