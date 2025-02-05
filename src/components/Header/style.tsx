import styled from 'styled-components'

import { theme } from '../../constants/theme'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: ${theme.sizes.full};
    background-color: ${theme.colors.indigo};
    padding: ${theme.padding.s} ${theme.padding.l};
    box-sizing: border-box;
    font-size: ${theme.font.m};
    @media only screen and (min-width: 1920px) {
        font-size: ${theme.font.xxxl};
    }
    @media only screen and (max-width: 740px) {
        font-size: ${theme.font.xs};
    }
    @media only screen and (max-width: 460px) {
        font-size: ${theme.font.xxs};
    }
`

export const StyledHeaderText = styled.div`
    width: ${theme.sizes.full};
    max-width: ${theme.sizes.max};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.white};
    max-height: ${theme.sizes.l};
    box-sizing: border-box;
`

export const StyledLinks = styled.nav`
    display: flex;
    align-items: center;
`

export const StyledLink = styled.a<{ $active: boolean }>`
    color: ${theme.colors.white};
    text-decoration: none;
    margin-left: ${theme.margin.l};
    cursor: pointer;

    ${({ $active }) =>
        $active &&
        `
        text-decoration: underline;
    `}
`
