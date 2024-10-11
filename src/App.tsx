import { useState } from 'react'
import './App.css'
import PokemonImage from './components/PokemonImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonImage pokemonName='ditto'/>
  )
}

export default App
