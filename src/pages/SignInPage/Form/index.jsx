import React from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { Container } from './styles';
import MyWalletApi from '../../../service/myWallet.api';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
    const { login } = React.useContext(AuthContext);
    const navigate = useNavigate()

    async function handleLogin(event) {
        event.preventDefault()

        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        setLoading(true);
        try {
            const response = await MyWalletApi.authenticateUser(body);

            login(response);

            navigate("/home", {state: response})
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }

    }
    return (
        <Container onSubmit={handleLogin}>
            <InputField required={true} placeholder={"Email"} inputRef={emailRef} />
            <InputField required={true} placeholder={"Senha"} inputRef={passwordRef} type={"password"}/>
            <Button text={"Entrar"} loading={loading} />
        </Container>
    );
};

export default Form;
