import React from 'react'
import {
    StyledDisplay,
    StyledSection,
    StyledLegend,
    StyledAddButton,
    StyledLabel,
} from './css/AddTaskStyle'
import {
    INPUT_TASK_LEGEND,
    INPUT_TASK_PLACEHOLDER,
} from '../../constants/textConstants'

export default function AddTask() {
    return (
        <StyledSection>
            <StyledLabel>
                <StyledLegend>{INPUT_TASK_LEGEND}</StyledLegend>
                <StyledDisplay
                    placeholder={INPUT_TASK_PLACEHOLDER}
                ></StyledDisplay>
            </StyledLabel>
            <StyledAddButton type="button">Button</StyledAddButton>
        </StyledSection>
    )
}
