import { createGlobalStyle } from 'styled-components'
import { cssConstants } from './constants/styledConstants'

export const GlobalStyle = createGlobalStyle`
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
    justify-items: center;
    flex-direction: column;
  }
`
