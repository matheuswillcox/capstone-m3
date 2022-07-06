import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import * as yup from "yup";
import { Container } from "../../styled-components/styled-Login";
import { useState } from "react";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const schema = yup.object().shape({});
  const [showEye, setShowEye] = useState(false);
  const collectData = (data) => {};
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Logo pokeAPI"
      />
      <form onSubmit={handleSubmit(collectData)}>
        <h1>Login</h1>
        <section>
          <input placeholder="Email" {...register("email")} />
          <div>
            <input
              placeholder="Senha"
              {...register("password")}
              type={showEye ? "password" : "text"}
            />
            <button
              className="Eye"
              onClick={(e) => {
                e.preventDefault();
                setShowEye(!showEye);
              }}
            >
              {showEye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </section>
        <button>Login</button>
        <p>
          Não e registrado? <button className="Register">Registrar</button>
        </p>
      </form>
    </Container>
  );
};
