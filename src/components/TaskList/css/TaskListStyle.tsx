import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${cssConstants.sizes.xxl};
    max-width: ${cssConstants.sizes.xxxl};
    padding: ${cssConstants.padding.m} ${cssConstants.padding.m};
    box-sizing: border-box;
`

export const StyledSeparateLine = styled.hr`
    border-top: ${cssConstants.sizes.xxl} solid;
    width: ${cssConstants.sizes.full};
`

export const StyledHeaderText = styled.h2`
    font-size: ${cssConstants.font.xl};
    @media only screen and (min-width: 1300px) {
        font-size: ${cssConstants.font.xxxl};
        min-height: ${cssConstants.sizes.xxxs};
    }
`
