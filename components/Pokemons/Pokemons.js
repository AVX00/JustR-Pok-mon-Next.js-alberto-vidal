import styled from "styled-components";
import Pokemon from "../Pokemon/Pokemon";

const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const PokemonsList = ({ pokemons }) => {
  return (
    <CardContainer>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </CardContainer>
  );
};

export default PokemonsList;
