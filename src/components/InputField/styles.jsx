import styled from 'styled-components';

export const Input = styled.input`
  width:326px;
  padding:16px;
  background-color:#fff;
  border-radius:5px;
  border:0;
  color:black;
  display:block;
  outline:0;
  font-size:20px;
  font-family: inherit;

  & + input{
    margin-top:10px;
  }
`;
