import { createGlobalStyle } from 'styled-components'
import { cssConstants } from './constants/styledConstants'
import './assets/font/Jost.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Jost";
    src: url("./assets/font/Jost.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-items: center;
    height: ${cssConstants.sizes.full};
    margin: 0;
    font-family: "Jost", sans-serif;
    background-color: ${cssConstants.colors.white};
    color: ${cssConstants.colors.black};
    border-color: ${cssConstants.colors.white};
  }
  
  .main-container {
    width:${cssConstants.sizes.full};
    display: flex;
    align-items: center;
    //justify-items: center;
    flex-direction: column;
  }
`
