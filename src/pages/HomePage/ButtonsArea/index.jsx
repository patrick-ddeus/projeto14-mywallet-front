import React from 'react';
import { TransactionButtonArea, TransactionButton } from './styles';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ButtonsArea = () => {
    const navigate = useNavigate()
    return (
        <TransactionButtonArea>
            <TransactionButton onClick={() => navigate("/nova-transacao/deposit")}>
                <IoAddCircleOutline />
                <p>Nova <br /> entrada</p>
            </TransactionButton>

            <TransactionButton onClick={() => navigate("/nova-transacao/withdraw")}>
                <IoRemoveCircleOutline />
                <p>Nova <br />saida</p>
            </TransactionButton>
        </TransactionButtonArea>
    );
};

export default ButtonsArea;
