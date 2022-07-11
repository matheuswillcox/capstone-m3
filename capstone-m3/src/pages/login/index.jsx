import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import * as yup from "yup";
import { Container } from "../../styledComponents/styled-Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../providers/global";
import { useContext } from "react";

import API from "../../services/api";

const Login = () => {

  const { userContext } = useContext(GlobalContext)

  const { setUserLoginInfo, renewToken } = userContext

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo vazio"),
    password: yup.string().required("Campo vazio"),
  });
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });
  const collectData = (data) => {

    API.post("/login", data)
      .then((res) => {
        toast.success("Logado!");
        setUserLoginInfo(data)

        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userID", res.data.user.id)
        userContext.setUserToken(res.data.accessToken)
        userContext.setUser(res.data.user)
        localStorage.setItem("@pokeCollectionUser", JSON.stringify(res.data.user))
        renewToken(data)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err)
        toast.error("Email ou senha incorretos!");
      });
  };

  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Logo pokeAPI"
      />
      <form onSubmit={handleSubmit(collectData)}>
        <h1>Login</h1>
        <section>
          <input
            placeholder="Email"
            {...register("email")}
            autoComplete="off"
          />
          {errors.email && (
            <span className="email-error">{errors.email.message}</span>
          )}
          <div>
            <input
              placeholder="Senha"
              {...register("password")}
              type={showEye ? "text" : "password"}
              autoComplete="off"
            />
            {errors.password && <span>{errors.password.message}</span>}
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
          Não e registrado?{" "}
          <button
            className="Register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Registrar
          </button>
        </p>
      </form>
    </Container>
  );
};
export default Login;
