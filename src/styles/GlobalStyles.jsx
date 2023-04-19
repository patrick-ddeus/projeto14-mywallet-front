import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";
import colors from "../constants/colors";

export const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

  }

  body{
    font-family:"Raleway", sans-serif;
    background-color: ${colors.primaryColor};
  }
`;