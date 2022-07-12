import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import Register from "../../pages/register";
import Login from "../../pages/login";
import Store from "../../pages/store";
import { useContext, useEffect } from "react";
import { useMemo } from "react";
import { GlobalContext } from "../../providers/global";

export const paths = {
  login: "/login",
  home: "/",
  register: "/register",
  store: "/store",
  dashboard: "/dashboard",
};

function Rotas() {

  const location = useLocation().pathname;
  const navigate = useNavigate();

  const protect = useMemo(() => [paths.home, paths.store, paths.dashboard], []);

  const { allPokemonsContext, userContext, tradesContext } = useContext(GlobalContext)

  const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

  useEffect(() => {
    if (protect.includes(location) && !localStorage.getItem("token")) {
      navigate(paths.login);
    } else if (
      (location === paths.login || location === paths.register) &&
      localStorage.getItem("token")
    ) {
      navigate(paths.home);
    }
  }, [navigate, location, protect]);

  useEffect(()=> {
        getPokemons(allPokemons, setAllPokemons)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/store" element={<Store />}></Route>
    </Routes>
  );
}

export default Rotas;
