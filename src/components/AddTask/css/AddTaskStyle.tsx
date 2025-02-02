import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledSection = styled.section`
    flex-direction: row;
    padding-top: ${cssConstants.padding.m};
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        padding: ${cssConstants.padding.m} ${cssConstants.padding.m};
    }
    @media only screen and (max-width: ${cssConstants.screenWidth.mobile}) {
        flex-direction: column;
        justify-items: center;
        align-items: center;
    }
`

export const StyledLegend = styled.legend`
    color: ${cssConstants.colors.indigo};
`

export const StyledDisplay = styled.input`
    font-family: 'Jost', sans-serif;
    font-size: ${cssConstants.font.m};
    min-height: ${cssConstants.sizes.xs};
    border: none;
    border-bottom: ${cssConstants.sizes.xxs} solid ${cssConstants.colors.indigo};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        font-size: ${cssConstants.font.xxl};
    }
    :focus {
        border-bottom: ${cssConstants.sizes.xxs} solid
            ${cssConstants.colors.indigo};
        outline: none;
    }
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: ${cssConstants.sizes.full};
    padding-top: ${cssConstants.padding.s};
    font-size: ${cssConstants.font.l};
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        font-size: ${cssConstants.font.xxl};
    }
`

export const StyledAddButton = styled.button`
    background-color: ${cssConstants.colors.indigo};
`
