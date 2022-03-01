import { useEffect, useState } from "react";
import PokemonsList from "../components/Pokemons/Pokemons";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI);
      const { results } = await response.json();
      const pokepromises = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      });
      const pokemons = await Promise.all(pokepromises);
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <>
      <h1>pokemons</h1>
      <PokemonsList pokemons={pokemons} />
    </>
  );
};

export default Pokemons;
