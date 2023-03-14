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
import Persona from './pages/Persona';
import Knowledge from './pages/Knowledge';

import Navbar from './Navbar';
import Footer from './Footer';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 7.3em;
  grid-area: top;
  background-color: #262626;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  grid-area: main;
  margin-top: 5em;
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
          <Navbar />
        </HeaderContainer>

        <MainContainer>
          <Switch>
            <Route path="/persona">
              <Persona />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/knowledge">
              <Knowledge />
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