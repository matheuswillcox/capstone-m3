import { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ButtonTroca } from "../../styledComponents/Modal-addTroca";
import API from "../../services/api";
import { GlobalContext } from "../../providers/global";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

export const Requisicao = () => {
  const { userContext, allPokemonsContext, themeContext, tradesContext } = useContext(GlobalContext);
  const { user, setUser, userToken } = userContext;
  const { allPokemons } = allPokemonsContext;
  const { trades, setTrades } = tradesContext

  const { themeSelector } = themeContext
  const [showModal, setShowModal] = useState(false);

  const [pokemon, setPokemon] = useState("");
  const [tradePokemon, setTradePokemon] = useState([]);

  useEffect(() => {
    const newPokemons = allPokemons.filter((poke) => {
      return poke.name !== pokemon;
    });
    setTradePokemon(newPokemons);
  }, [ pokemon]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");


    if (userToken) {
    } else {
      async function GetUser(){
        const user = await API.get(`users/${userID}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
          .then((res) => {
            setPokemon(res.data.pokemon[0].name);
          })
          .catch((err) => toast.error("Email ou senha incorretos!"))

        return user
      }
      GetUser();
    }
  }, [setUser, user,  userToken]);

  const schema = yup.object().shape({
    offered: yup.string().required("Preencha com seu pokemon"),
    wanted: yup.string().required("Preencha com seu pokemon buscado"),
  });
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const collectData = (data) => {
    const trocaPokemons = {
      pokemon: data,
      userID: user.id,
      userName: user.name,
      exchange: false,
      img: user.img,
      userPokemons: user.pokemon
    };

    setTrades([...trades, trocaPokemons])

    const attPokemons = []

    user.pokemon?.map((poke) => {
      if(poke.name === trocaPokemons.pokemon.offered) {
        attPokemons.push({name:poke.name ,quantity: poke.quantity - 1})
      }else{
        attPokemons.push(poke)
      }
    })

    API.patch(`users/${user.id}`, {pokemon: attPokemons}, {
            headers: {Authorization: `Bearer ${userToken}`}
    })
    .then((res) => {
      setUser(res.data)
      localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
    })

    API.post("/troca", trocaPokemons, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => {
      toast.success("Enviado com sucesso");
      setTimeout(() => {
        
      }, 1000);
    });
  };

  return (
    <>
      <ButtonTroca
      theme={themeSelector}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src="https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png"
          alt="Pokeball"
        />
        <span>Troque cards com outros Treinadores!</span>
        <img
          className="pokeball"
          src="https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png"
          alt="Pokeball"
        />
      </ButtonTroca>
      {showModal && (
        <Container>
          <form onSubmit={handleSubmit(collectData)}>
            <div>
              <h1>Trocar</h1>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
            <select
              {...register("offered")}
              onChange={(e) => {
                console.log(e.target);
                setPokemon(e.target.value);
              }}
            >
              {user.pokemon.map((poke, index) => {
                return <option key={index}>{poke.name}</option>;
              })}
            </select>

            <select {...register("wanted")}>
              {tradePokemon.map((poke, index) => {
                return <option key={index}>{poke.name}</option>;
              })}
            </select>
            <button
              onClick={() => {
                setTimeout(() => {
                  setShowModal(false);
                }, 2000);
              }}
              className="TrocarPokemon"
            >
              Aplicar
            </button>
          </form>
        </Container>
      )}
    </>
  );
};
