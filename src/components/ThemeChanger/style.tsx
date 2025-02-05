import styled from 'styled-components'

import { theme } from '@/constants/theme'

export const StyledSwitchThemeContainer = styled.div`
    width: ${theme.sizes.m};
    max-width: ${theme.sizes.xl};
    font-size: ${theme.font.s};
    @media only screen and (max-width: ${theme.screenWidth.mobile}) {
        width: ${theme.sizes.full};
        font-size: ${theme.font.xs};
    }
`

export const StyledHeaderSwitchTheme = styled.h3`
    display: block;
    margin-bottom: ${theme.margin.m};
    padding-left: ${theme.padding.s};
`

export const StyledSection = styled.section`
    width: ${theme.sizes.full};
    padding: ${theme.padding.s};
`

export const StyledSelect = styled.select`
    width: ${theme.sizes.full};
    padding: ${theme.padding.s};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.font.xxs};
    cursor: pointer;
    :focus {
        outline: none;
    }
`
