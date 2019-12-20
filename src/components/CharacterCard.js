import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  padding: 5px;
  margin: 12px 0;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

export default function CharacterCard(props) {
  const char = props.character;
  return (
    <Card>
      <Image src={char.image} />
      <h2>{char.name}</h2>
      <p>{char.name} is {char.status}</p>
    </Card>
  );
}
