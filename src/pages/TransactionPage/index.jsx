import React from 'react';
import { useParams } from "react-router-dom";
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from "react-router-dom";
import { Container, InputsArea } from './styles';
import MyWalletApi from '../../service/myWallet.api';
import { Input } from '../../components/InputField/styles';

const TransactionPage = () => {
    const { tipo } = useParams();
    const [value, setValue] = React.useState("");
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

    async function handleSubmit(event) {
        event.preventDefault();

        if (!validaForm()) return;

        const body = {
            valor: Number(value.replace(",", ".")),
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
        let valid = true;
        const regexDecimal = /^\d+\.\d{2}$/;

        if (!value) {
            alert("Preencha o campo valor");
            valid = false;
            return valid;
        }


        if (!descriptionRef.current.value) {
            alert("Preencha o campo descrição");
            valid = false;
            return valid;
        }

        if (!regexDecimal.test(value)) {
            alert("Campo valor deve conter apenas números decimais e positivos!");
            valid = false;
            return valid;
        }

    
        return valid;
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        const numberValue = parseFloat(value);
        const formattedValue = isNaN(numberValue) ? "0.00" : numberValue.toFixed(2);
        setValue(formattedValue);
    };

    return (
        <Container>
            <h1>Nova {formatText()}</h1>
            <InputsArea onSubmit={handleSubmit}>
                <Input required={true} placeholder={"valor"} type={"number"} min={0} step={0.01} value={value} onChange={handleInputChange} />
                <InputField required={true} placeholder={"descrição"} inputRef={descriptionRef} />
                <Button loading={isLoading} text={`Salvar ${formatText()}`} />
            </InputsArea>
        </Container>
    );
};

export default TransactionPage;
