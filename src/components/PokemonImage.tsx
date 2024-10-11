import { useEffect, useState } from "react";

const PokemonImage: React.FC<{ pokemonName: string }> = ({ pokemonName }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          const data = await response.json();
          setImageUrl(data.sprites.front_default);
        } catch (error) {
          console.error('画像取得エラー:', error);
        }
      };
  
      fetchImage();
    }, [pokemonName]);
  
    if (!imageUrl) {
      return <div>Loading...</div>;
    }
  
    return <img src={imageUrl} alt={pokemonName} />;
  };
  
export default PokemonImage