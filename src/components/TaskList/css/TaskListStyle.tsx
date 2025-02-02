import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledSection = styled.section`
    flex-direction: column;
    padding: ${cssConstants.padding.m} ${cssConstants.padding.l};
`
export const StyledTasksContainer = styled.div`
    overflow-y: auto;
    max-height: ${cssConstants.sizes.xl};
    width: ${cssConstants.sizes.full};
    #element::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        max-height: ${cssConstants.sizes.xxxl};
    }
`

export const StyledSeparateLine = styled.hr`
    border-top: ${cssConstants.sizes.xxl} solid;
    width: ${cssConstants.sizes.full};
`

export const StyledHeaderText = styled.h2`
    font-size: ${cssConstants.font.xl};
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        font-size: ${cssConstants.font.xxxl};
        min-height: ${cssConstants.sizes.xxxs};
    }
`

export const StyledDeleteButton = styled.button`
    background-color: ${cssConstants.colors.pinkie};
`
