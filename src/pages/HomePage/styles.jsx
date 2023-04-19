import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
    width:100vw;
    padding:25px 24px;
    overflow-x:hidden;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content: space-between;
  color:white;

  h1{
    font-family:"Raleway";
    font-size:26px;
    font-weight: 700;
  }

  svg{
    font-size:26px;
    cursor:pointer;
  }
`;

export const TransactionsContainer = styled.div`
  margin-top:22px;
  width:100%;
  background-color:#fff;
  border-radius:5px;
  height:446px;

  ul{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    max-height:400px;
    overflow-y:auto;
    scrollbar-width: thin;
  }

  li{
    color:black;
  }

  .balance{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    padding:20px;
    font-size:17px;
    font-weight:700;
    font-family:"Raleway"
  }
`;

export const TransactionItem = styled.li`
    display:flex;
    justify-content: space-between;

    & p:nth-child(1){

        & span:nth-child(1){
            color:#C6C6C6;
        }

        display:flex;
        gap:10px;
    }
`;

export const FallBackTransactions = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    font-size: 20px;
    font-weight:400;
    color:#868686;
`;

