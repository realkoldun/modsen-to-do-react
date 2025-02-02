import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledSection = styled.section`
    flex-direction: row;
    width: ${cssConstants.sizes.full};
`

export const StyledTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: ${cssConstants.gaps.s};
    width: ${cssConstants.sizes.xxl};
    @media only screen and (max-width: ${cssConstants.screenWidth.small}) {
        width: ${cssConstants.sizes.m};
    }
`
export const StyledCheckbox = styled.input`
    width: ${cssConstants.font.xs};
    height: ${cssConstants.font.xs};
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        width: ${cssConstants.font.l};
        height: ${cssConstants.font.l};
    }
    @media only screen and (max-width: ${cssConstants.screenWidth.mobile}) {
        font-size: ${cssConstants.font.xxs};
    }
`

export const StyledTaskName = styled.p`
    width: ${cssConstants.sizes.full};
    font-size: ${cssConstants.font.s};
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
        font-size: ${cssConstants.font.l};
    }
    @media only screen and (max-width: ${cssConstants.screenWidth.mobile}) {
        font-size: ${cssConstants.font.xxs};
    }
`
export const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: ${cssConstants.margin.m};
`

export const StyledIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    min-height: ${cssConstants.font.s};
    min-width: ${cssConstants.font.s};
    margin-left: ${cssConstants.margin.l};
    @media only screen and (max-width: ${cssConstants.screenWidth.small}) {
        margin-top: 0;
        width: ${cssConstants.sizes.s};
    }
    @media only screen and (max-width: ${cssConstants.screenWidth.mobile}) {
        width: ${cssConstants.sizes.xxs};
    }
    img {
        max-width: ${cssConstants.font.s};
        max-height: ${cssConstants.font.s};
        @media only screen and (min-width: ${cssConstants.screenWidth.wide}) {
            width: ${cssConstants.font.l};
            height: ${cssConstants.font.l};
        }
        @media only screen and (max-width: ${cssConstants.screenWidth.mobile}) {
            max-width: ${cssConstants.font.xxs};
            max-height: ${cssConstants.font.xxs};
        }
    }
`
