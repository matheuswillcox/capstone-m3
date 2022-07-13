import { createContext, useState } from "react";
import { getPokemons } from "../contexts/pokemonsFunctions";
import { getTrades } from "../contexts/tradesFunctions";
import API from "../services/api";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );
  const [user, setUser] = useState( JSON.parse(localStorage.getItem("@pokemonUser")) || {});

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

  const [itemCompra, setItemCompra] = useState([]);
  const [packType, setPackType] = useState(0)

  const itemCompraContext = { itemCompra, setItemCompra, packType, setPackType };

  //

  const [ themeSelector, setThemeSelector ] = useState("var(--red)")

  const themeContext = { themeSelector, setThemeSelector  }
  //

  const raridade = {
    normal: [
      1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46,
      48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 83, 84, 86,
      88, 90, 92, 95, 96, 98, 100, 102, 104, 106, 107, 108, 109, 111, 113, 114,
      116, 118, 120, 122, 123, 124, 125, 126, 127, 128, 129,
    ],
    raro: [
      2, 5, 8, 11, 12, 14, 15, 17, 18, 20, 22, 24, 26, 28, 30, 31, 33, 34, 36,
      38, 40, 42, 44, 45, 47, 49, 51, 53, 55, 57, 59, 61, 62, 64, 65, 67, 68,
      70, 71, 73, 75, 76, 78, 80, 82, 85, 87, 89, 91, 93, 94, 97, 99, 101, 103,
      105, 110, 112, 115, 117, 119, 121, 130, 131, 132, 133, 134, 135, 136, 137,
      138, 139, 140, 141, 142, 143, 147, 148,
    ],
    super_raro: [3, 6, 9, 144, 145, 146, 149],

    ultra_raro: [150, 151],
  };

  const [ rarity, setRarity ] = useState(raridade)

  const rarityContext = { rarity, setRarity }

  function renewToken(data) {
    setTimeout(() => {
      API.post("/login", data).then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userID", res.data.user.id);
        setUserToken(res.data.accessToken);
        setUser(res.data.user);
        renewToken(data);
      });
    }, 60000);
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
        themeContext,
        rarityContext
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
