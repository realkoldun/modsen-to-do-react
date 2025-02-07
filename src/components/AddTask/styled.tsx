import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    ${({ theme }) => css`
        flex-direction: row;
        padding-top: ${theme.padding.m};

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            padding: ${theme.padding.m} ${theme.padding.m};
        }

        @media only screen and (max-width: ${theme.screenWidth.small}) {
            flex-direction: column;
            justify-items: center;
            align-items: center;
        }
    `}
`

export const StyledLegend = styled.legend`
    ${({ theme }) => css`
        color: ${theme.colors.indigo};
    `}
`

export const StyledDisplay = styled.input`
    font-family: 'Jost', sans-serif;
    border: none;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        min-height: ${theme.sizes.xs};

        border-bottom: ${theme.sizes.xxs} solid ${theme.colors.indigo};

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xxl};
        }

        :focus {
            border-bottom: ${theme.sizes.xxs} solid ${theme.colors.indigo};
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

export const StyledAddButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.indigo};
    `}
`
