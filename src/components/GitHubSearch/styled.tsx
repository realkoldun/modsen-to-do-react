import styled from 'styled-components'

import { theme } from '@/constants/theme'

export const StyledSection = styled.section`
    flex-direction: row;
    padding: ${theme.padding.s};
    font-size: ${theme.font.m};
    @media only screen and (min-width: ${theme.screenWidth.wide}) {
        padding: ${theme.padding.m} ${theme.padding.m};
    }
`

export const StyledLegend = styled.legend`
    font-size: ${theme.font.m};
    color: ${theme.colors.black};
`

export const StyledDisplay = styled.input`
    font-family: 'Jost', sans-serif;
    font-size: ${theme.font.m};
    min-height: ${theme.sizes.xs};
    border: none;
    border-bottom: ${theme.sizes.xxs} solid ${theme.colors.lightGray};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media only screen and (min-width: ${theme.screenWidth.wide}) {
        font-size: ${theme.font.xxl};
    }
    :focus {
        border-bottom: ${theme.sizes.xxs} solid ${theme.colors.indigo};
        outline: none;
    }
`

export const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: ${theme.margin.m};
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: ${theme.sizes.full};
    padding-top: ${theme.padding.s};
    font-size: ${theme.font.l};
    @media only screen and (min-width: ${theme.screenWidth.wide}) {
        font-size: ${theme.font.xxl};
    }
`

export const StyledSearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    min-height: ${theme.font.s};
    min-width: ${theme.font.s};
    img {
        max-width: ${theme.font.l};
        max-height: ${theme.font.l};
    }
`
