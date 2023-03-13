import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background: #EAE9E8;
    padding: 12px;
    border-radius: 5px;
    width: 250px;
    font-size: 14px;
    border-width: 0.2px;
    border-color: #7F7F7F;
    margin-right: 1em;
`;

const StyledButton = styled.button`
    background: #586F6B;
    color: #F2F2F2;
    padding: 12px;
    border-radius: 3px;
    border-style: none;
    font-size: 14px;

`;
function Form({ placeholder }) {
    const [name, setName] = useState("");

    //console.log(props)
    //const { placeholder } = props;
    function handleChange(evt) {
        console.log("value: " + evt.target.value)
        setName(evt.target.value)
    }
    return (
        <>
            <StyledInput type="text" placeholder={placeholder} value={name} onChange={handleChange}></StyledInput>
            <StyledButton>SEND</StyledButton>
        </>
    )
}

export default Form;