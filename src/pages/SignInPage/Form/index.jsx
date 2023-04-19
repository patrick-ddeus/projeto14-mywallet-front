import React from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { Container } from './styles';

const Form = () => {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false)

    return (
        <Container>
            <InputField placeholder={"Email"} formRef={emailRef}/>
            <InputField placeholder={"Senha"} formRef={passwordRef}/>
            <Button text={"Entrar"} loading={loading}/>
        </Container>
    );
}

export default Form;
