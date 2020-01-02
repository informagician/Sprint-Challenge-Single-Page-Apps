import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characters">
          <Header />
          <CharacterList />
        </Route>
      </Switch>
    </main>
  );
}
