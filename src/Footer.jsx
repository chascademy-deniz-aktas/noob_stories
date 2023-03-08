import React from "react";
import styled from "styled-components";
import instaicon from './assets/insta.png';
import liicon from './assets/linkedin.png';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-area: footer;
    background-color: #fdece8;
    max-height: 5em;
    width: 100vw;;
    z-index: 2;
/*  grid-area: footer; */
    position: fixed;
    bottom: 0;
`;

const IconContainer = styled.div`
display: flex;
flex-direction: row;
    padding: 0.5em;

`;

const StyledLogo = styled.img`
width: 2em;
margin: 0.5em;
;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright Deniz Aktas ©</p>

            <IconContainer>
                <a href="https://instagram.com"><StyledLogo src={instaicon} alt="Instagram Logo" /></a>
                <a href="https://linkedin.com"><StyledLogo src={liicon} alt="LinkedIn Logo" /></a>
            </IconContainer>

        </StyledFooter>
    );
}

export default Footer;
