import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: ${cssConstants.sizes.xxl};
    max-width: ${cssConstants.sizes.xxxl};
    padding: ${cssConstants.padding.l} ${cssConstants.padding.l};
    box-sizing: border-box;
    @media only screen and (min-width: 1300px) {
        padding: ${cssConstants.padding.m} ${cssConstants.padding.m};
    }
    @media only screen and (max-width: 460px) {
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
    min-height: ${cssConstants.sizes.xs};
    border: none;
    border-bottom: ${cssConstants.sizes.xxs} solid ${cssConstants.colors.indigo};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media only screen and (min-width: 1300px) {
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
    font-size: ${cssConstants.font.s};
    @media only screen and (min-width: 1300px) {
        font-size: ${cssConstants.font.xxl};
    }
`

export const StyledAddButton = styled.button`
    font-family: 'Jost', sans-serif;
    min-height: ${cssConstants.sizes.xxxs};
    min-width: ${cssConstants.sizes.s};
    background-color: ${cssConstants.colors.indigo};
    color: ${cssConstants.colors.white};
    border-radius: ${cssConstants.sizes.xs};
    margin-left: ${cssConstants.margin.l};
    cursor: pointer;
    @media only screen and (min-width: 1300px) {
        font-size: ${cssConstants.font.xxl};
        min-height: ${cssConstants.sizes.xxxs};
    }
    @media only screen and (max-width: 740px) {
        font-size: ${cssConstants.font.xxs};
        width: ${cssConstants.sizes.xs};
    }
    @media only screen and (max-width: 460px) {
        margin-left: 0;
        margin-top: ${cssConstants.margin.l};
        min-width: ${cssConstants.sizes.full};
    }
`
