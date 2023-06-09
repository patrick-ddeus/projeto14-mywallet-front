import React from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import MyWalletApi from '../../../service/myWallet.api';
import { useNavigate } from "react-router-dom";
import { Container } from './styles';

const Form = () => {
    const nomeRef = React.useRef(null);
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const confirmPasswordRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            alert("As senhas não coincidem!");
            return;
        }

        const body = {
            name: nomeRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        };

        setLoading(true);

        try {
            const response = await MyWalletApi.registerUser(body);
            alert(response.message);
            navigate("/");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container onSubmit={handleRegister}>
            <InputField required={true} placeholder={"Nome"} inputRef={nomeRef} />
            <InputField required={true} placeholder={"Email"} inputRef={emailRef} />
            <InputField required={true} placeholder={"Senha"} inputRef={passwordRef} type="password" />
            <InputField required={true} placeholder={"Confirme a senha"} inputRef={confirmPasswordRef} type="password" />
            <Button text={"Cadastrar"} loading={loading} />
        </Container>
    );
};

export default Form;
