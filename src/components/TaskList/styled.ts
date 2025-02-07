import styled, { css } from 'styled-components'

export const StyledSection = styled.section`
    ${({ theme }) => css`
        flex-direction: column;
        padding: ${theme.padding.m} ${theme.padding.l};
    `}
`

export const StyledTasksContainer = styled.div`
    ${({ theme }) => css`
        overflow-y: auto;
        max-height: ${theme.sizes.xl};
        width: ${theme.sizes.full};

        #element::-webkit-scrollbar {
            display: none;
        }

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            max-height: ${theme.sizes.xxxl};
        }
        @media only screen and (min-width: ${theme.screenWidth.mobile}) {
            max-height: ${theme.sizes.l};
        }
    `}
`

export const StyledSeparateLine = styled.hr`
    ${({ theme }) => css`
        border-top: ${theme.sizes.xxl} solid;
        width: ${theme.sizes.full};
    `}
`

export const StyledHeaderText = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.xl};

        @media only screen and (min-width: ${theme.screenWidth.wide}) {
            font-size: ${theme.font.xxxl};
            min-height: ${theme.sizes.xxxs};
        }
    `}
`

export const StyledDeleteButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.pinkie};
    `}
`
