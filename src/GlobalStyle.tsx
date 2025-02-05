import './assets/font/Jost.ttf'

import { createGlobalStyle } from 'styled-components'

import { theme } from './constants/theme'

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
    height: ${theme.sizes.full};
    margin: 0;
    font-family: "Jost", sans-serif;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-color: ${theme.colors.white};
  }
  
  .main-container {
    width:${theme.sizes.full};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  button {
    font-family: 'Jost', sans-serif;
    font-size: ${theme.font.m};
    min-height: ${theme.sizes.xxxs};
    min-width: ${theme.sizes.s};
    color: ${theme.colors.white};
    border-radius: ${theme.sizes.xs};
    margin-left: ${theme.margin.l};
    cursor: pointer;
    @media only screen and (min-width: ${theme.screenWidth.wide}) {
        font-size: ${theme.font.xl};
        min-height: ${theme.sizes.xxxs};
    }
    @media only screen and (max-width: ${theme.screenWidth.small}) {
        font-size: ${theme.font.xxs};
        width: ${theme.sizes.xs};
    }
    @media only screen and (max-width:  ${theme.screenWidth.mobile}) {
        margin-left: 0;
        margin-top: ${theme.margin.l};
        min-width: ${theme.sizes.full};
    }
  }
  section {
    display: flex;
    justify-items: center;
    align-items: center;
    width: ${theme.sizes.xxl};
    max-width: ${theme.sizes.xxxl};
    box-sizing: border-box;
  }
`
