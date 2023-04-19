import React from 'react';
import { TransactionButtonArea, TransactionButton } from './styles';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
const ButtonsArea = () => {
    return (
        <TransactionButtonArea>
            <TransactionButton>
                <IoAddCircleOutline />
                <p>Nova <br/> entrada</p>
            </TransactionButton>

            <TransactionButton>
                <IoRemoveCircleOutline />
                <p>Nova <br/>saida</p>
            </TransactionButton>
        </TransactionButtonArea>
    );
};

export default ButtonsArea;
