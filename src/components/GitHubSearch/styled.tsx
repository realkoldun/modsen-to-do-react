import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    ${({ theme }) => css`
        padding: ${theme.padding.s};
        font-size: ${theme.font.m};
        width: ${theme.sizes.m};
        max-width: ${theme.sizes.xl};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            padding: ${theme.padding.m} ${theme.padding.m};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            width: ${theme.sizes.full};
            font-size: ${theme.font.xs};
        }
    `}
`

export const StyledLegend = styled.legend`
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        color: ${theme.fontColor};
    `}
`

export const StyledDisplay = styled.input`
    ${({ theme }) => css`
        font-family: 'Jost', sans-serif;
        font-size: ${theme.font.m};
        min-height: ${theme.sizes.xs};
        border: none;
        border-bottom: ${theme.sizes.xxs} solid ${theme.fontColor};
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xxl};
        }
        :focus {
            border-bottom: ${theme.sizes.xxs} solid ${theme.headerBackground};
            outline: none;
        }
    `}
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: left;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        padding-top: ${theme.padding.s};
        font-size: ${theme.font.l};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xxl};
        }
    `}
`

export const StyledSearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    ${({ theme }) => css`
        max-height: ${theme.font.xxl};
        min-height: ${theme.font.xxl};
        max-width: ${theme.font.xxl};
        min-width: ${theme.font.xxl};
        padding: 0;
    `}
`

export const StyledImg = styled.img`
    ${({ theme }) => css`
        max-width: ${theme.font.xxl};
        max-height: ${theme.font.xxl};
    `}
`

export const StyledErrorMessageText = styled.p`
    ${({ theme }) => css`
        padding-left: ${theme.padding.s};
    `}

    color: #ff0000;
`
