import styled, { css } from 'styled-components'

interface StyledInputProps {
    isFullWidth: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
    font-family: 'Jost', sans-serif;
    border: none;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${({ isFullWidth }) =>
        isFullWidth ? '100%' : 'auto'}; // 'auto' вместо пустого
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        min-height: ${theme.sizes.xs};
        background-color: ${theme.mainBackground};
        color: ${theme.fontColor};
        border-bottom: ${theme.sizes.xxs} solid ${theme.headerBackground};

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.l};
        }
        @media only screen and (max-width: ${theme.screenWidth.small}) {
            font-size: ${theme.font.s};
        }

        :focus {
            border-bottom: ${theme.sizes.xxs} solid ${theme.headerBackground};
            outline: none;
        }
    `}
`
