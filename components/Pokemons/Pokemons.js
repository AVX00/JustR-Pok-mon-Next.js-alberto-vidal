import Pokemon from "../Pokemon/Pokemon";

const Pokemons = ({ pokemons }) => {
  return (
    <>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </>
  );
};

export default Pokemons;
