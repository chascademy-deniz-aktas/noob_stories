import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

import Navbar from './Navbar';
import logo from './assets/logo.png';
import Footer from './Footer';




const LogoContainer = styled.div`
  max-width: 10rem;
  grid-area: top;
  grid-area: 1 / 1 / span 1 / span 1;
  margin-top: 2em;
  margin-left: 2em;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  max-height: 80px;
  grid-area: top;
  background-color: #262626;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const MainContainer = styled.div`
  grid-area: main;
  margin-top: 5em;
  height: 1000px;
  padding-left: 2em;
  padding-right: 2em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows:  5rem repeat(3, 1fr) 7rem;
  grid-template-columns: repeat(5, 1fr);
  background-color: #d7d1cb;
  grid-template-areas: 
  "top top top top top"
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

        <HeaderContainer>
          <LogoContainer>
            <StyledImg src={logo} alt="Logo" />
          </LogoContainer>
        </HeaderContainer>

        <Navbar />

        <MainContainer>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MainContainer>

        <Footer />

      </GridContainer>
    </Router >
  );
}

export default App;