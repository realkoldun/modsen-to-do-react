import styled, { css } from 'styled-components'

export const StyledSwitchThemeContainer = styled.div`
    ${({ theme }) => css`
        width: ${theme.sizes.m};
        max-width: ${theme.sizes.xl};
        font-size: ${theme.font.s};
        color: ${theme.fontColor};
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            width: ${theme.sizes.full};
            font-size: ${theme.font.xs};
        }
    `}
`

export const StyledHeaderSwitchTheme = styled.h3`
    ${({ theme }) => css`
        display: block;
        margin-bottom: ${theme.margin.m};
        padding-left: ${theme.padding.s};
    `}
`

export const StyledSection = styled.section`
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        padding: ${theme.padding.s};
    `}
`

export const StyledSelect = styled.select`
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        padding: ${theme.padding.s};
        background-color: ${theme.headerBackground};
        color: ${theme.headerFontColor};
        border-radius: ${theme.font.xxs};
        cursor: pointer;
        :focus {
            outline: none;
        }
    `}
`
