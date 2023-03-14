import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    grid-area: top;
    grid-area: 1 / 3 / span 1 / span 1;
    max-width: 7em;
    margin-top: 0.8em;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    background-color: #7F9183;
    border-radius: 5px;
    text-decoration: none;
    padding: 0.1em 0.5em 0.1em 0.5em;
    margin: 8px;
    font-size: 0.9em;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </StyledNav>
    );
}

export default Navbar;
