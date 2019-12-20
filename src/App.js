import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/MovieList">
        <Header />
        <CharacterList />
      </Route>
    </main>
  );
}
