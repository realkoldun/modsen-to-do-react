import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: ${cssConstants.sizes.full};
    background-color: ${cssConstants.colors.indigo};
    padding: ${cssConstants.padding.s} ${cssConstants.padding.l};
    box-sizing: border-box;
    font-size: ${cssConstants.font.m};
    @media only screen and (min-width: 1920px) {
        font-size: ${cssConstants.font.xxxl};
    }
    @media only screen and (max-width: 740px) {
        font-size: ${cssConstants.font.xs};
    }
    @media only screen and (max-width: 460px) {
        font-size: ${cssConstants.font.xxs};
    }
`

export const StyledHeaderText = styled.div`
    width: ${cssConstants.sizes.full};
    max-width: ${cssConstants.sizes.max};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${cssConstants.colors.white};
    max-height: ${cssConstants.sizes.l};
    box-sizing: border-box;
`

export const StyledLinks = styled.nav`
    display: flex;
    align-items: center;
`

export const StyledLink = styled.a<{ $active: boolean }>`
    color: ${cssConstants.colors.white};
    text-decoration: none;
    margin-left: ${cssConstants.margin.l};
    cursor: pointer;

    ${({ $active }) =>
        $active &&
        `
        text-decoration: underline;
    `}
`
