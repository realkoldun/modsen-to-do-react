import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        padding-bottom: ${theme.padding.m};
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
        font-size: ${theme.font.s};
        color: ${theme.fontColor};
    `}
`

export const StyledDisplay = styled.input``

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

export const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledSearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    ${({ theme }) => css`
        @media only screen and (max-width: ${theme.screenWidth.small}) {
            max-height: ${theme.font.xxxl};
            max-width: ${theme.font.xxxl};
        }
        max-height: ${theme.font.xxl};
        min-height: ${theme.font.xxl};
        max-width: ${theme.font.xxl};
        min-width: ${theme.font.xxl};
        padding-right: 20px;
    `}
`

export const StyledImg = styled.img`
    ${({ theme }) => css`
        max-width: ${theme.font.xxl};
        max-height: ${theme.font.xxl};
    `}
`
