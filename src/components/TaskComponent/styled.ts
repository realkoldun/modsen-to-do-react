import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    ${({ theme }) => css`
        flex-direction: row;
        width: ${theme.sizes.full};
    `}
`

export const StyledTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${({ theme }) => css`
        gap: ${theme.gaps.s};
        width: ${theme.sizes.xxl};
        @media only screen and (max-width: ${theme.screenWidth.small}) {
            width: ${theme.sizes.m};
        }
    `}
`

export const StyledCheckbox = styled.input`
    ${({ theme }) => css`
        width: ${theme.font.xs};
        height: ${theme.font.xs};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            width: ${theme.font.l};
            height: ${theme.font.l};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            font-size: ${theme.font.xxs};
        }
    `}
`

export const StyledTaskName = styled.p`
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        font-size: ${theme.font.s};
        color: ${theme.fontColor};

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.l};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            font-size: ${theme.font.xs};
        }
    `}
`

export const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    ${({ theme }) => css`
        margin-right: ${theme.margin.m};
    `}
`

export const StyledIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    ${({ theme }) => css`
        min-height: ${theme.font.s};
        min-width: ${theme.font.s};
        margin-left: ${theme.margin.l};
        @media only screen and (max-width: ${theme.screenWidth.small}) {
            margin-top: 0;
            width: ${theme.sizes.s};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            width: ${theme.sizes.xxs};
        }
    `}
`

export const StyledImg = styled.img`
    ${({ theme }) => css`
        max-width: ${theme.font.s};
        max-height: ${theme.font.s};
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            width: ${theme.font.l};
            height: ${theme.font.l};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            max-width: ${theme.font.xxs};
            max-height: ${theme.font.xxs};
        }
    `}
`
