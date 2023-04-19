import React from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';

import { Container } from './styles';

const Form = () => {
    const nomeRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const confirmPasswordRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false)

    return (
        <Container>
            <InputField placeholder={"Nome"} formRef={nomeRef}/>
            <InputField placeholder={"Email"} formRef={emailRef}/>
            <InputField placeholder={"Senha"} formRef={passwordRef} type="password"/>
            <InputField placeholder={"Confirme a senha"} formRef={confirmPasswordRef} type="password"/>
            <Button text={"Cadastrar"} loading={loading}/>
        </Container>
    );
}

export default Form;
