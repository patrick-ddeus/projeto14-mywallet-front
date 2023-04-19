import React from 'react';
import Form from './Form';
import { Link } from "react-router-dom";
import { Container } from './styles';

const SignUpPage = () => {
    return <Container>
        <div>
            <h1>MyWallet</h1>
            <Form />
            <Link to={"/cadastro"}>Já tem uma conta? Entre agora!</Link>
        </div>
    </Container>;
};

export default SignUpPage;