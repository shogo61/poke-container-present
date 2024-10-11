import { useState } from "react";
import PokemonImage from "./PokemonImage";

const PokemonContainer: React.FC = () => {
    const [pokemonName, setPokemonName] = useState('pikachu');
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPokemonName(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={pokemonName} onChange={handleNameChange} />
        <PokemonImage pokemonName={pokemonName} />
      </div>
    );
  };

export default PokemonContainer