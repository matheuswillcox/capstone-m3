import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ButtonTroca } from "../../styledComponents/Modal-addTroca";
import API from "../../services/api";
import { GlobalContext } from "../../providers/global";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

export const Requisicao = () => {
  const { userContext, allPokemonsContext } = useContext(GlobalContext);
  const { user, setUser } = userContext;
  const { allPokemons } = allPokemonsContext;
  const [showModal, setShowModal] = useState(false);

  const [pokemon, setPokemon] = useState("");
  const [tradePokemon, setTradePokemon] = useState([]);

  useEffect(() => {
    const newPokemons = allPokemons.filter((poke) => {
      return poke.name !== pokemon;
    });
    setTradePokemon(newPokemons);
  }, [pokemon]);

  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const token = localStorage.getItem("token");

    if (user.email) {
      user.pokemon = [{ name: "charmander" }, { name: "eevee" }];
      setPokemon(user.pokemon[0].name);
    } else {
      API.get(`users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          res.data.pokemon = [{ name: "charmander" }, { name: "eevee" }];
          setPokemon(res.data.pokemon[0].name);
          setUser(res.data);
        })
        .catch((err) => navigate("/login"));
    }
  }, []);

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
    };

    API.post("/troca", trocaPokemons,{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res)=>{
      toast.success("Enviado com sucesso")
    })
  };

  return (
    <>
      <ButtonTroca
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src="https://i.pinimg.com/originals/09/a6/ae/09a6ae937a6d9ef5cd10d132b59d6f5d.png"
          alt="Pokeball"
        />
        Troque cards com outros Treinadores!
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
