import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;
    ${({ theme }) => css`
        padding-left: ${theme.padding.s};
        //padding-top: ${theme.padding.m};
        font-size: ${theme.font.m};
        max-height: ${theme.sizes.xl};
        max-width: ${theme.sizes.xl};
        box-shadow: 4px 4px 8px #cccccc;
        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            max-height: ${theme.sizes.xl};
            max-width: ${theme.sizes.xl};
        }
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            width: ${theme.sizes.full};
            font-size: ${theme.font.xs};
            max-height: 300px;
            max-width: 300px;
        }
    `}
`

export const StyledGithubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        padding: ${theme.padding.xl};
        max-height: 100%;
        max-width: 100%;
    `}
`

export const StyledLoginText = styled.p``

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    max-height: 300px;
    max-width: 300px;
    ${({ theme }) => css`
        @media only screen and (max-width: ${theme.screenWidth.mobile}) {
            max-height: ${theme.sizes.l};
            max-width: ${theme.sizes.l};
        }
    `}
`
