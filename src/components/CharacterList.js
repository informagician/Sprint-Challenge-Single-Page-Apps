import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Broken Robot", error);
      })
  },[]);

  const List = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-around;
  `;
  return (
    <List>
      {characters.map(character => 
        <CharacterCard character={character} />
      )}
    </List>
  );
}