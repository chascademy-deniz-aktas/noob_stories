import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/form';

function Contact() {

    return (
        <>
            <p>Contact</p>
            <Form placeholder="Your email" test={5} />
        </>
    );
}

export default Contact;