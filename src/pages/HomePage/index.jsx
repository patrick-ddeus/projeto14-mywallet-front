import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, TitleContainer, TransactionsContainer, TransactionItem, FallBackTransactions } from './styles';
import { IoExitOutline } from "react-icons/io5";
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import useFetch from '../../hooks/useFetch';
import ButtonsArea from './ButtonsArea';

const HomePage = () => {
    const location = useLocation();
    const { name, token } = location.state;
    const [transactions, setTransactions] = React.useState(null);
    const { logout } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const { data } = useFetch(
        `${process.env.REACT_APP_API_URL}/bank/transactions`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }, 100000);

    React.useEffect(() => {
        setTransactions(data);
    }, [data]);

    function calculateTotalAndFormat() {
        const total = data.reduce((total, transaction) => total + transaction.balance, 0);
        return total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    function handleLogout() {
        logout();
        navigate("/");
    }

    function formatDate(date) {
        return dayjs(date).format("DD/MM");
    }

    return (
        <Container>
            <TitleContainer>
                <h1>Olá, {name} </h1>
                <IoExitOutline onClick={handleLogout} />
            </TitleContainer>
            <TransactionsContainer>
                {transactions ?
                    (
                        <>
                            <ul>
                                {transactions?.map((transaction) => (
                                    <TransactionItem>
                                        <p>
                                            <span>
                                                {formatDate(transaction.date)}
                                            </span>
                                            <span>
                                                {transaction.description}
                                            </span>
                                        </p>
                                        <p>
                                            {transaction.balance?.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </p>
                                    </TransactionItem>
                                ))}
                            </ul>
                            <p className='balance'>Saldo: <span>{calculateTotalAndFormat()}</span></p>
                        </>
                    )
                    : (
                        <FallBackTransactions>
                            Não há registros de <br /> entrada ou saida
                        </FallBackTransactions>
                    )
                }
            </TransactionsContainer>
            <ButtonsArea />
        </Container>
    );
};

export default HomePage;