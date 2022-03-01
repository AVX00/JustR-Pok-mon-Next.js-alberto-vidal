import PokemonsList from "../components/Pokemons/Pokemons";

const PokemonSSR = ({ pokemons }) => {
  return (
    <>
      <h1>pokemon-ssr</h1>
      <PokemonsList pokemons={pokemons} />
    </>
  );
};
export default PokemonSSR;

export const getServerSideProps = async () => {
  const result = await fetch(process.env.NEXT_PUBLIC_FAVS);
  const pokemons = await (await result).json();

  return {
    props: {
      pokemons,
    },
  };
};
