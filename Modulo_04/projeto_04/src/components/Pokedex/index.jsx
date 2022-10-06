import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card'
import NavBar from '../NavBar'
import './style.css'
import Pokemoninfo from '../Pokemoninfo'

function Pokedex() {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState()

    useEffect(() => {
      getPokemons()
    }, [])

    function getPokemons() {
      let endpoints = []
      for (let i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      
     axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
          .then((res) => setPokemons(res))
          .catch((err) => console.log(err))
    }

    function filterPokemon(name) {
      let filteredPokemons = []

      if (name === '') {
        getPokemons()
      }

      for (let i in pokemons) {
        if(pokemons[i].data.name.includes(name)) {
          filteredPokemons.push(pokemons[i])
        }
      }
      setPokemons(filteredPokemons)
    }

  return (
    <>
      <NavBar 
        filterPokemon={filterPokemon}
      />
      <div className="cards">
        {pokemons.map((pokemon, key) => (
          <Card
            key={key}
            name={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            id={pokemon.data.id}
            types={pokemon.data.types}
            infoPokemon={() => setPokedex(pokemon.data)}
          />
        ))}      
      </div>

      <Pokemoninfo data={pokedex} />
    </>
  )
}

export default Pokedex