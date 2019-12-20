import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from "styled-components";
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [characters, setCharacters] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        setSearchResult(response.data.results);
      })
      .catch(error => {
        console.log("Broken Robot", error);
      })
  },[]);

  useEffect(() => {
  
    let res = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(res);
  },[searchTerm]);

  const List = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-around;
  `;
  return (
    <div>
    <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <List>
      {searchResult.map(character => 
        <CharacterCard character={character} key={character.id}/>
      )}
    </List>
    </div>
  );
}