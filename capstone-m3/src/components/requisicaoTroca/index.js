import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "../../styledComponents/Modal-addTroca";
import API from "../../services/api";
import { GlobalContext } from "../../providers/global";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Requisicao = () => {
  const { userContext } = useContext(GlobalContext);
  const { user, setUser } = userContext;
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const token = localStorage.getItem("token");

    if (user.email) {
      user.pokemon = [{ name: "charmander" }, { name: "eevee" }];
      console.log(user);
    } else {
      API.get(`users/${userID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.data))
        .catch((err) => navigate("/login"));
    }
  }, []);

  const schema = yup.object().shape({
    offered: yup.string().required("Insira o nome do seu pokemon"),
    wanted: yup.string().required("Insira o nome do pokemon buscado"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const collectData = (data) => {
    const trocaPokemons = {
      pokemon: data,
      userID: user.id,
      userName: user.name,
      exchange: false,
      img: user.img,
    };
    console.log(trocaPokemons);
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Trocar pokemons
      </button>
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
            <select {...register("offered")}>
              {user.pokemon.map((poke) => {
                return <option>{poke.name}</option>;
              })}
            </select>
            {errors.offered && <span>{errors.offered.message}</span>}
            <input placeholder="Pokemon procurado" {...register("wanted")} />
            {errors.wanted && <span>{errors.wanted.message}</span>}
            <button onClick={() => {}} className="TrocarPokemon">
              Aplicar
            </button>
          </form>
        </Container>
      )}
    </>
  );
};
