import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = styled.li`
  cursor: pointer;
  position: relative;
  height: 400px;
  width: 280px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  margin: 20px;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  & .stats {
    height: 50%;
  }
  & .image {
    width: 200px;
    height: 200px;
    position: relative;
  }
`;

const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  const onClick = (id) => () => {
    console.log(`${router.pathname}/${id}`);
    router.push(`${router.pathname}/${id}`);
  };
  return (
    <Card onClick={onClick(pokemon.id)}>
      <div className="image">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          layout="fill"
        />
      </div>
      <div className="stats">
        <h2>{pokemon.name}</h2>
      </div>
    </Card>
  );
};

export default Pokemon;
