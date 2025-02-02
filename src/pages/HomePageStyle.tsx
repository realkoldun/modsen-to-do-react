import { createGlobalStyle } from 'styled-components'
import { cssConstants } from '../constants/styledConstants'

export const HomePageStyle = createGlobalStyle`
  /*button {
    font-family: 'Jost', sans-serif;
    min-height: ${cssConstants.sizes.xxxs};
    min-width: ${cssConstants.sizes.s};
    color: ${cssConstants.colors.white};
    border-radius: ${cssConstants.sizes.xs};
    margin-left: ${cssConstants.margin.l};
    cursor: pointer;
    @media only screen and (min-width: 1300px) {
        font-size: ${cssConstants.font.xxl};
        min-height: ${cssConstants.sizes.xxxs};
    }
    @media only screen and (max-width: 740px) {
        font-size: ${cssConstants.font.xxs};
        width: ${cssConstants.sizes.xs};
    }
    @media only screen and (max-width: 460px) {
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
  }*/
`
