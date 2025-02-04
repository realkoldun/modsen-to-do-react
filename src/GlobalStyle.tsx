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
    flex-direction: column;
  }
  button {
    font-family: 'Jost', sans-serif;
    font-size: ${cssConstants.font.m};
    min-height: ${cssConstants.sizes.xxxs};
    min-width: ${cssConstants.sizes.s};
    color: ${cssConstants.colors.white};
    border-radius: ${cssConstants.sizes.xs};
    margin-left: ${cssConstants.margin.l};
    cursor: pointer;
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        font-size: ${cssConstants.font.xl};
        min-height: ${cssConstants.sizes.xxxs};
    }
    @media only screen and (max-width: ${cssConstants.screenWidth.small}) {
        font-size: ${cssConstants.font.xxs};
        width: ${cssConstants.sizes.xs};
    }
    @media only screen and (max-width:  ${cssConstants.screenWidth.mobile}) {
        margin-left: 0;
        margin-top: ${cssConstants.margin.l};
        min-width: ${cssConstants.sizes.full};
    }
  }
  section {
    display: flex;
    justify-items: center;
    align-items: center;
    width: ${cssConstants.sizes.xxl};
    max-width: ${cssConstants.sizes.xxxl};
    box-sizing: border-box;
  }
`