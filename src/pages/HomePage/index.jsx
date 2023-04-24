/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useLocation } from "react-router-dom";
import { Container, TitleContainer, TransactionsContainer, TransactionItem, FallBackTransactions, NumberParagraph } from './styles';
import { IoExitOutline } from "react-icons/io5";
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import useFetch from '../../hooks/useFetch';
import ButtonsArea from './ButtonsArea';

const HomePage = () => {
    const location = useLocation();
    const [transactions, setTransactions] = React.useState(null);
    const { logout, isAuthenticated } = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
            return
        }
        console.log(isAuthenticated)

        const { token } = location.state;

        const { data } = useFetch(
            `${process.env.REACT_APP_API_URL}/bank/transactions`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }, 4000);

        setTransactions(data);
    }, []);
 

    function calculateTotal() {
        const total = transactions?.reduce((total, transaction) => {
            if (transaction.type === "deposito") {
                return total + transaction.amount;
            }
            return total - transaction.amount;
        }, 0);

        return total || 0;
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
                <h1>Olá, {location.state?.name} </h1>
                <IoExitOutline onClick={handleLogout} />
            </TitleContainer>
            <TransactionsContainer>
                {transactions?.length !== 0 ?
                    (
                        <>
                            <ul>
                                {transactions?.map(transaction => (
                                    <TransactionItem key={transaction._id}>
                                        <p>
                                            <span>
                                                {formatDate(transaction.date)}
                                            </span>
                                            <span>
                                                {transaction.description}
                                            </span>
                                        </p>
                                        <NumberParagraph isNegative={transaction.type === "retirada" ? true : false}>
                                            <span>
                                                {transaction.amount?.toLocaleString("pt-BR", {
                                                    style: "decimal",
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}
                                            </span>
                                        </NumberParagraph>
                                    </TransactionItem>
                                ))}
                            </ul>
                            <NumberParagraph isNegative={calculateTotal() < 0} className='balance'>
                                Saldo:
                                <span>
                                    {calculateTotal().toLocaleString("pt-BR", {
                                        style: "decimal",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </span>
                            </NumberParagraph>
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