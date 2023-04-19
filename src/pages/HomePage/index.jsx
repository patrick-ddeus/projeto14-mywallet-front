import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, TitleContainer, TransactionsContainer } from './styles';
import { IoExitOutline } from "react-icons/io5";

const HomePage = () => {
    const location = useLocation();

    const { name, token } = location.state

    return <Container>
        <TitleContainer>
            <h1>Olá, {name} </h1>
            <IoExitOutline/>
        </TitleContainer>
        <TransactionsContainer>
            
        </TransactionsContainer>
    </Container>;
};

export default HomePage;