import { Headersite } from "../../components/header";
import TradesList from "../../components/TradesList";
import { StyledDiv } from "../../styledComponents/StyledHomeTrades";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../providers/global";
import { toast } from "react-toastify";
import API from "../../services/api";

function Home() {

  const { themeContext, userContext } = useContext(GlobalContext)

  const { user, setUser, userToken } = userContext

  useEffect(() => {
    if(user.pokemon.length === 0) {

      const newUserPokes = [{
        name: "bulbasaur",
        quantity: 1,
      },{
        name: "charmander",
        quantity: 1,
      },{
        name: "squirtle",
        quantity: 1,
      }]

      API.patch(`users/${user.id}`, {pokemon: newUserPokes}, {
        headers: {Authorization: `Bearer ${userToken}`}
      })
      .then((res) => {
          setUser(res.data)
          localStorage.setItem("@pokemonUser", JSON.stringify(res.data))
          toast.success("Você recebeu um presente de boas vindas, visite sua coleção!")
      })
    }

  }, [])



  const { themeSelector } = themeContext
  return (
    
    <StyledDiv theme={themeSelector}>
      <Headersite />
      <TradesList />
    </StyledDiv>

  );
}

export default Home;
