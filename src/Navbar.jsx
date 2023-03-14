import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

import logo from './assets/logo.png';


//Logo in header
const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: 1 / 1 / span 1 / span 1;
  margin-top: 1em;
  margin-left: 2em;
`;

const StyledImg = styled.img`
  width: 100%;
`;

//Navmenu in header
const StyledNav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    grid-area: top;
    float: right;
    max-width: 5em;
    margin-top: 0.8em;
    margin-right: 3em;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    padding: 0.3em;
    margin: 5px;
    font-size: 0.9em;
    text-transform: uppercase;
`;

const Navbar = () => {
    return (
        <>
            <LogoContainer>
                <StyledImg src={logo} alt="Logo" />
            </LogoContainer>

            <StyledNav>
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/portfolio">Portfolio</StyledLink>
                <StyledLink to="/knowledge">Knowledge</StyledLink>
                <StyledLink to="/persona">Persona</StyledLink>
                <StyledLink to="/">Home</StyledLink>
            </StyledNav>
        </>
    );
}

export default Navbar;
