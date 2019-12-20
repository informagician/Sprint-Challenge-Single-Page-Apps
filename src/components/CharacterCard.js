import React from "react";

export default function CharacterCard(props) {
  const char = props.character;
  return (
    <div className="card">
      <img src={char.image} />
      <h2>{char.name}</h2>
      <p>{char.name} is {char.status}</p>
    </div>
  );
}
