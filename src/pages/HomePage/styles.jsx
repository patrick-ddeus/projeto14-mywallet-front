import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: ${colors.primaryColor};
    padding:25px 24px;
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
  height:60vh;
`;