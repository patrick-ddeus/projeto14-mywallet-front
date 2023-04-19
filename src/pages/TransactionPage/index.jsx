import React from 'react';
import { useParams } from "react-router-dom";
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from "react-router-dom";
import { Container, InputsArea } from './styles';
import MyWalletApi from '../../service/myWallet.api';

const TransactionPage = () => {
    const { tipo } = useParams();
    const valueRef = React.useRef(null);
    const descriptionRef = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const { getUserInfo, isAuthenticated } = React.useContext(AuthContext);
    const navigate = useNavigate();

    function formatText() {
        return tipo === "deposit" ? "entrada" : "saída";
    }

    React.useEffect(() => {
        if (!isAuthenticated || !getUserInfo()) {
            navigate("/");
        }
    }, []);

    async function handleButton() {

        if (!validaForm()) return;

        const body = {
            valor: Number(valueRef.current.value.replace(",", ".")),
            descricao: descriptionRef.current.value,
        };

        const { token, name } = getUserInfo();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        setIsLoading(true);

        try {

            const response = await MyWalletApi[tipo](body, config);
            alert(response.message);
            navigate("/home", { state: { name, token } });
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    function validaForm() {
        const parsedValue = parseInt(valueRef.current.value);
        let valid = true;
        const regexDecimal = /^\d+\.\d{2}$/;

        if (!parsedValue) {
            alert("Campo valor deve conter apenas números decimais e positivos!");
            valid = false;
            return valid;
        }

        if (!regexDecimal.test(valueRef.current.value)) {
            alert("Campo valor deve conter apenas números decimais e positivos!");
            valid = false;
            return valid;
        }

        if (!valueRef.current.value) {
            alert("Preencha o campo valor");
            valid = false;
            return valid;
        }

        if (!descriptionRef.current.value) {
            alert("Preencha o campo descrição");
            valid = false;
            return valid;
        }

        return valid;
    }

    return (
        <Container>
            <h1>Nova {formatText()}</h1>
            <InputsArea>
                <InputField placeholder={"valor"} inputRef={valueRef} type={"number"} />
                <InputField placeholder={"descrição"} inputRef={descriptionRef} />
                <Button loading={isLoading} text={`Salvar ${formatText()}`} onClick={handleButton} />
            </InputsArea>
        </Container>
    );
};

export default TransactionPage;
