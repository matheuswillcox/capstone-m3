import { createContext, useState } from "react";
import { getPokemons } from "../contexts/pokemonsFunctions";
import { getTrades } from "../contexts/tradesFunctions";
import API from "../services/api";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );
  const [user, setUser] = useState({});

  const [userLoginInfo, setUserLoginInfo] = useState({});

  const userContext = {
    userToken,
    setUserToken,
    user,
    setUser,
    userLoginInfo,
    setUserLoginInfo,
    renewToken,
  };

  //

  const [allPokemons, setAllPokemons] = useState([]);

  const allPokemonsContext = { allPokemons, setAllPokemons, getPokemons };

  //

  const [trades, setTrades] = useState([]);

  const tradesContext = { trades, setTrades, getTrades };

  //

  const [compra, setCompra] = useState(false);

  const compraContext = { compra, setCompra };

  //

  const [itemCompra, setItemCompra] = useState("");

  const itemCompraContext = { itemCompra, setItemCompra };

  //

  const [ themeSelector, setThemeSelector ] = useState("var(--red)")

  const themeContext = { themeSelector, setThemeSelector  }
  //

  function renewToken(data) {
    setTimeout(() => {
      API.post("/login", data).then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userID", res.data.user.id);
        setUserToken(res.data.accessToken);
        setUser(res.data.user);
        renewToken(data);
        console.log("Pegou");
      });
    }, 360000);
  }

  //Aqui estarão os contextos criados por todos.

  return (
    <GlobalContext.Provider
      value={{
        userContext,
        allPokemonsContext,
        tradesContext,
        compraContext,
        itemCompraContext,
        renewToken,
        themeContext
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
