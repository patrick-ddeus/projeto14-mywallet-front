import styled from 'styled-components';

export const TransactionButtonArea = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:13px;
`;

export const TransactionButton = styled.button`
    width:155px;
    height:114px;
    background-color:#A328D6;
    border:0;
    cursor:pointer;
    color:white;
    font-weight:700;
    font-size:17px;
    font-family:"Raleway";
    border-radius:5px;
    padding:10px;
    text-align:left;

    display:flex;
    flex-direction: column;
    justify-content: space-between;

    svg{
        font-size:24px;
    }
`;
