import PokemonDetail from "../../components/Pokemon/PokemonDetail";

const PokemonISR = ({ pokemon }) => {
  return (
    <>
      <h1>pokemon-isr</h1>
      <PokemonDetail pokemon={pokemon} />
    </>
  );
};
export default PokemonISR;

export const getStaticPaths = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_FAVS);
  const pokemons = await response.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FAVS}${params.id}`);
  const pokemon = await response.json();

  return {
    props: { pokemon },
  };
};
