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
    const { getUserInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();

    function formatText() {
        return tipo === "deposit" ? "entrada" : "saída";
    }

    async function handleButton() {
        setIsLoading(true);

        validaForm();

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

        try {
            const response = await MyWalletApi.deposit(body, config);
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

        if (!parsedValue) {
            alert("Campo valor deve conter apenas números decimais e positivos!");
            return;
        }

        if (valueRef.current.value % 1 === 0) {
            alert("Campo valor deve conter apenas números decimais e positivos!");
            return;
        }

        if (!valueRef.current.value) {
            alert("Preencha o campo valor");
            return;
        }

        if (!descriptionRef.current.value) {
            alert("Preencha o campo descrição");
            return;
        }
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
