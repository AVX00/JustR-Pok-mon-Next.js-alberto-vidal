import styled from "styled-components";
import Image from "next/image";

const Card = styled.li`
  height: 400px;
  width: 280px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & img {
    object-position: center;
    object-fit: cover;
  }
`;

const Pokemon = ({ pokemon }) => {
  return (
    <Card>
      <Image alt="a" />
      <div>
        <h2>pokemon</h2>
      </div>
    </Card>
  );
};
