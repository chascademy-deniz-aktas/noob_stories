import React, { useState } from 'react';
import styled from 'styled-components';
import stormtrooper from '../assets/stormtrooper.png';

const MainImgcontainer = styled.div`
max-width: 50vw;
grid-area: 2 / 1 / span 2 / span 2;
`;

const StyledMainimg = styled.img`
  width: 50vw;
  border-radius: 3px;
`;

function Home() {
    return (
        <>
            <p>This is the Home-page</p>
            <MainImgcontainer>
                <StyledMainimg src={stormtrooper} alt="Star Wars stormtrooper in sand" />
            </MainImgcontainer>
        </>
    );
}

export default Home;