
import axios from "axios"

export const getPokemons = async (allPokemons, setAllPokemons) => {

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    const pokeArr = await response.data.results

    const state = []

    pokeArr?.map((poke) => {
        return axios.get(poke.url).then((res) => {state.push(res.data)})
    })

    await setAllPokemons(state)
    
}
