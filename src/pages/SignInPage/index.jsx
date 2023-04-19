import React from 'react';
import Form from './Form';
import { Container } from './styles';
import { Link } from "react-router-dom";
const SignInPage = () => {
    return (
        <Container>
            <div>
                <h1>MyWallet</h1>
                <Form />
                <Link to={"/cadastro"}>Primeira vez? Cadastre-se!</Link>
            </div>
        </Container>
    );
};

export default SignInPage;
