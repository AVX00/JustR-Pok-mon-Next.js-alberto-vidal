import { useEffect, useState } from "react";
import styled from "styled-components";
import Pokemon from "../components/Pokemon/Pokemon";

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

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
      <CardContainer>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
      </CardContainer>
    </>
  );
};

export default Pokemons;
