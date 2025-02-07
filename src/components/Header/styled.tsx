import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        background-color: ${theme.colors.indigo};
        padding: ${theme.padding.s} ${theme.padding.l};
        font-size: ${theme.font.m};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xxxl};
        }
        @media only screen and (max-width: ${theme.screenWidth.small}) {
            font-size: ${theme.font.xs};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            font-size: ${theme.font.xxs};
        }
    `}
`

export const StyledHeaderTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        max-width: ${theme.sizes.max};

        color: ${theme.colors.white};
        max-height: ${theme.sizes.l};
    `}
`

export const StyledLinksContainer = styled.nav`
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${({ theme }) =>
            theme.screenWidth.mobile}) {
        display: none;
    }
`

export const StyledLink = styled.a<{ $active: boolean }>`
    text-decoration: none;
    cursor: pointer;
    ${({ theme }) => css`
        color: ${theme.colors.white};

        margin-left: ${theme.margin.l};
    `}

    ${({ $active }) => $active && ` text-decoration: underline; `}
`

export const StyledBurgerMenu = styled.div`
    display: none;

    @media only screen and (max-width: ${({ theme }) =>
            theme.screenWidth.mobile}) {
        display: flex;
    }
`
