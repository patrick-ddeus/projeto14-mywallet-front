import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ButtonStyled } from './styles';

const Button = ({ text, loading }) => {
    return <ButtonStyled disabled={loading}>
        {loading ? (
            <ThreeDots 
                height="24"
                width="60"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true} />
        ) :
            text}
    </ButtonStyled>;
};

export default Button;