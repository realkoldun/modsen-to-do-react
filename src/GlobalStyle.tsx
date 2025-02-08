import '@/assets/font/Jost.ttf'

import { createGlobalStyle, css } from 'styled-components'

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
    ${({ theme }) => css`
        height: ${theme.sizes.full};
        margin: 0;
        font-family: 'Jost', sans-serif;
        background-color: ${theme.mainBackground};
        color: ${theme.fontColor};
        border-color: ${theme.mainBackground};
    `}
  }

  .main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
    `}
  }

  button {
    font-family: 'Jost', sans-serif;
    cursor: pointer;
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        min-height: ${theme.sizes.xxxs};
        min-width: ${theme.sizes.s};
        color: ${theme.mainBackground};
        border-radius: ${theme.sizes.xs};
        margin-left: ${theme.margin.l};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xl};
            min-height: ${theme.sizes.xxxs};
        }

        @media only screen and (max-width: ${theme.screenWidth.small}) {
            margin-top: ${theme.margin.m};
            margin-left: 0;
            font-size: ${theme.font.xs};
            width: ${theme.sizes.full};
        }

        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            margin-left: 0;
            margin-top: ${theme.margin.l};
            min-width: ${theme.sizes.full};
        }
    `}
  }

  section {
    display: flex;
    justify-items: center;
    align-items: center;
    ${({ theme }) => css`
        width: ${theme.sizes.xxl};
        max-width: ${theme.sizes.xxxl};
    `}
    box-sizing: border-box;
  }
`
