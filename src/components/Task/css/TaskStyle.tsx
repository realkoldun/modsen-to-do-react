import { cssConstants } from '../../../constants/styledConstants'
import styled from 'styled-components'

export const StyledTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: left;
    gap: ${cssConstants.gaps.s};
    width: ${cssConstants.sizes.full};
`
export const StyledCheckbox = styled.input`
    width: ${cssConstants.font.xs};
    height: ${cssConstants.font.xs};
    @media only screen and (min-width: 1300px) {
        width: ${cssConstants.font.l};
        height: ${cssConstants.font.l};
    }
`

export const StyledTaskName = styled.p`
    width: ${cssConstants.sizes.full};
    @media only screen and (min-width: 1300px) {
        font-size: ${cssConstants.font.l};
    }
`

export const StyledIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: ${cssConstants.padding.s};
    img {
        width: ${cssConstants.font.xs};
        height: ${cssConstants.font.xs};
        @media only screen and (min-width: 1300px) {
            width: ${cssConstants.font.l};
            height: ${cssConstants.font.l};
        }
    }
`
