import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  display:block;
  margin:0 auto;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">Visit our Characters</Link>
      </Header>
    </section>
  );
}
