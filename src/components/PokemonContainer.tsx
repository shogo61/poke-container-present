import { useState } from "react";
import PokemonImage from "./PokemonImage";
import { Button } from "@mui/material";
import { Star } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PokemonContainer: React.FC = () => {
  const randomPokemonNumber = (Math.floor(Math.random() * 1025) + 1).toString();
  const [pokemonName, setPokemonName] = useState(randomPokemonNumber);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Card
        sx={{
          height: 200,
          width: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <PokemonImage pokemonName={pokemonName} />
        </CardContent>
      </Card>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          size="medium"
          endIcon={<Star />}
          onClick={() => setPokemonName(randomPokemonNumber)}
        >
          random
        </Button>
      </div>
    </div>
  );
};

export default PokemonContainer;
