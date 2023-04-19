import styled from 'styled-components';
import colors from '../../constants/colors';

export const ButtonStyled = styled.button`
  width:326px;
  padding:11px;
  font-size:20px;
  font-family: "Raleway";
  font-weight: 700;
  border-radius:5px;
  background-color:${colors.button.bgColor};
  border:0;
  margin-top:13px;
  color:${colors.button.fontColor};
  cursor:pointer;
  display:flex;
  justify-content: center;
  transition:all .2s ease;

  &:hover{
    background-color:#ffffff2f;
    transform:scale(1.03)
  }
`;
