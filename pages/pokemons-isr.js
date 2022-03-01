import PokemonsList from "../components/Pokemons/Pokemons";

const PokemonISR = ({ pokemons }) => {
  return (
    <>
      <h1>pokemon-isr</h1>
      <PokemonsList pokemons={pokemons} />
    </>
  );
};
export default PokemonISR;

export const getStaticProps = async () => {
  const result = await fetch(process.env.NEXT_PUBLIC_FAVS);
  const pokemons = await (await result).json();

  return {
    props: {
      pokemons,
    },
    revalidate: 20,
  };
};
