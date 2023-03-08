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
    grid-area: top;
    grid-area: 1 / 3 / span 1 / span 1;
`;

const StyledLink = styled(Link)`
    color: #d80909;
    background-color: #fdece8;
    border-radius: 8px;
    text-decoration: none;
    padding: 0.2em 0.7em 0.2em 0.7em;
    margin: 10px;
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
