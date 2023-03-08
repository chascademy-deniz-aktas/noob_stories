import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Navbar';
import logo from './assets/logo.png';
import Footer from './Footer';


/* const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`; */

/* const HeaderContainer = styled.div`
  grid-area: 1 / 1 / span 1 / span 1;
  background-color: #8b8989;
  height: 100px;
  width: 100vw;
  z-index: -1;
`; */

const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
  margin-top: 1em;
  margin-left: 1em;
`;

const StyledImg = styled.img`
width: 100%;
`;

const MainContainer = styled.div`
  grid-area: main;
  background-color: #dfdede;
  height: 2000px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows:  7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;

function App() {

  return (
    <Router>
      <GridContainer>

        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />

        <MainContainer>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
          <h1>Hello Deniz</h1>
        </MainContainer>

        <Footer />

      </GridContainer>
    </Router>
  );
}


export default App;