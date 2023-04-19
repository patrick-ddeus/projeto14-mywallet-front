import styled from 'styled-components';
import colors from "../../constants/colors";

export const Container = styled.div`
   width:100vw;
  height:100vh;
  background-color: ${colors.primaryColor};
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  
  h1{
    font-family: 'Saira Stencil One';
    font-weight: 400;
    color:white;
    margin-bottom:24px;
  }

  a{
    color:white;
    text-decoration:none;
    font-weight: 700;
    font-family:"Raleway";
    font-size:15px;
  }
`;
