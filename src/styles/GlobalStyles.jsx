import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";

export const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box
  }

  body{
    font-family:"Raleway", sans-serif;
  }
`;