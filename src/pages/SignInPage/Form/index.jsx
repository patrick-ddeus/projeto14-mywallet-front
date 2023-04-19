import React from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import { Container } from './styles';
import MyWalletApi from '../../../service/myWallet.api';
import { AuthContext } from '../../../contexts/AuthProvider';

const Form = () => {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
    const { login } = React.useContext(AuthContext);

    async function handleLogin() {
        setLoading(true);

        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        try {
            const response = await MyWalletApi.authenticateUser(body);
            
            login(response)
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }

    }
    return (
        <Container>
            <InputField placeholder={"Email"} formRef={emailRef} />
            <InputField placeholder={"Senha"} formRef={passwordRef} />
            <Button text={"Entrar"} loading={loading} onClick={handleLogin} />
        </Container>
    );
};

export default Form;
