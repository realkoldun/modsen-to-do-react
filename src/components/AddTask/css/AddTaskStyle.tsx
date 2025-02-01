import { cssConstants } from '../../../constants/styledConstants'
import styled, { createGlobalStyle } from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${cssConstants.sizes.xxl};
    max-width: ${cssConstants.sizes.xxxl};
    padding: ${cssConstants.padding.l} ${cssConstants.padding.l};
    box-sizing: border-box;
`

export const StyledLegend = styled.legend`
    color: ${cssConstants.colors.indigo};
    font-size: ${cssConstants.font.s};
`

export const StyledDisplay = styled.input`
    font-family: 'Jost', sans-serif;
    min-height: ${cssConstants.sizes.xs};
    font-size: ${cssConstants.font.s};
    border: none;
    border-bottom: ${cssConstants.sizes.xxs} solid ${cssConstants.colors.indigo};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
`

export const StyledAddButton = styled.button`
    font-family: 'Jost', sans-serif;
    height: ${cssConstants.sizes.full};
    width: ${cssConstants.sizes.s};
    background-color: ${cssConstants.colors.indigo};
    color: ${cssConstants.colors.white};
    border-radius: ${cssConstants.sizes.xs};
    margin-left: ${cssConstants.margin.l};
    cursor: pointer;
    box-sizing: border-box;
`
