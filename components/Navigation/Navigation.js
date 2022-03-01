import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  background-color: #222;
  width: 100vw;
  margin: 0;
  padding: 0;
  & nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
  }
  & a {
    color: #f0f0f0;
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/pokemons">All Pokemons</Link>
        <Link href="/pokemons-ssg">Pokemons SSG</Link>
        <Link href="/pokemons-ssr">Pokemons SSR</Link>
        <Link href="/pokemons-isr">POkemons ISR</Link>
      </nav>
    </Header>
  );
};

export default Navigation;
