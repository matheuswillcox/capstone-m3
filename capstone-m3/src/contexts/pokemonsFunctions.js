//esse arquivo se refere APENAS a função de requisição de todos os 151 pokemons para o state global

import axios from "axios"

export const getPokemons = (allPokemons, setAllPokemons) => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((response) => {setAllPokemons(response.data.results)})
    
}
