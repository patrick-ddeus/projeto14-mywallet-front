import React from 'react';
import { Container } from './styles';

const ErrorMessage = ({ text }) => {
    return (
        <Container>
            {text}
        </Container>
    );
};

export default ErrorMessage;
