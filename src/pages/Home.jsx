import React, { useState } from 'react';
import styled from 'styled-components';
import omar from '../assets/omar.jpg';

const MainImgcontainer = styled.div`
    min-width: 50vw;
    grid-area: 2 / 1 / span 2 / span 5;
`;

const StyledMainimg = styled.img`
    width: 50vw;
    
    border-radius: 5px;
    border: 0.5px solid #A5A5A5;
`;

function Home() {
    return (
        <>
            <h1>"COME AT THE KING, YOU BEST NOT MISS."</h1>
            <p>- Omar Little</p>
            <MainImgcontainer>
                <StyledMainimg src={omar} alt="Omar Little in The Wire" />
            </MainImgcontainer>
        </>
    );
}

export default Home;