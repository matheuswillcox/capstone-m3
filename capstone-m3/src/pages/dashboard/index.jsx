import { useContext } from "react";
import { Headersite } from "../../components/header";
import { GlobalContext } from "../../providers/global";

function Dashboard() {

  const { allPokemonsContext } = useContext(GlobalContext)

  const { allPokemons, setAllPokemons, getPokemons } = allPokemonsContext

  return (
    <>
      <Headersite />
      <div>Dashboard</div>
      <button onClick={() => {console.log(allPokemons)}}>teste</button>
    </>
  );
}

export default Dashboard;
