import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Container, Grid } from '@mui/material'
import NavBar from '../../components/NavBar'
import PokemonCard from '../../components/PokemonCard'
import LoadingItens from '../../components/Skeletons'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  async function getPokemons() {
    const endPoints = []
    const qtdPokemons = 50

    for (let i = 1; i < qtdPokemons; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    const response = await Axios.all(endPoints.map((endPoint) => Axios.get(endPoint))).then((res) =>
      setPokemons(res)
    )
  }

  const pokemonFilter = (name) => {
    const filteredPokemons = []

    if (name === '') {
      getPokemons()
    }

    for (const i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xg">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <LoadingItens />
          ) : (
            pokemons.map((pokemonsList) => (
              <Grid key={pokemonsList.data.id} item xs={6} sm={4} lg={2}>
                <PokemonCard
                  name={pokemonsList.data.name}
                  experience={pokemonsList.data.base_experience}
                  image={pokemonsList.data.sprites.front_default}
                  types={pokemonsList.data.types}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default App
