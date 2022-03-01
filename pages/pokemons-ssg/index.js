import PokemonsList from "../../components/Pokemons/Pokemons";

const PokemonsSSG = ({ pokemons }) => {
  return (
    <>
      <h1>pokemon-ssg</h1>
      <PokemonsList pokemons={pokemons} />
    </>
  );
};
export default PokemonsSSG;

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_FAVS);
  const pokemons = await (await response).json();

  return {
    props: {
      pokemons,
    },
  };
};
