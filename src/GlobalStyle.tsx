import { createGlobalStyle } from 'styled-components'

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
    height: ${({ theme }) => theme.sizes.full};
    margin: 0;
    font-family: "Jost", sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.white};
  }

  .main-container {
    width: ${({ theme }) => theme.sizes.full};
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  button {
    font-family: 'Jost', sans-serif;
    font-size: ${({ theme }) => theme.font.m};
    min-height: ${({ theme }) => theme.sizes.xxxs};
    min-width: ${({ theme }) => theme.sizes.s};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.sizes.xs};
    margin-left: ${({ theme }) => theme.margin.l};
    cursor: pointer;

    @media only screen and (min-width: ${({ theme }) => theme.screenWidth.wide}) {
      font-size: ${({ theme }) => theme.font.xl};
      min-height: ${({ theme }) => theme.sizes.xxxs};
    }

    @media only screen and (max-width: ${({ theme }) => theme.screenWidth.small}) {
      font-size: ${({ theme }) => theme.font.xxs};
      width: ${({ theme }) => theme.sizes.xs};
    }

    @media only screen and (max-width: ${({ theme }) => theme.screenWidth.mobile}) {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.margin.l};
      min-width: ${({ theme }) => theme.sizes.full};
    }
  }

  section {
    display: flex;
    justify-items: center;
    align-items: center;
    width: ${({ theme }) => theme.sizes.xxl};
    max-width: ${({ theme }) => theme.sizes.xxxl};
    box-sizing: border-box;
  }
`
