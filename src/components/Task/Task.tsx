import React, { useState } from 'react'
import {
    StyledCheckbox,
    StyledIconButton,
    StyledIconContainer,
    StyledSection,
    StyledTaskContainer,
    StyledTaskName,
} from './css/TaskStyle'

import DELETE_ICON from '../../assets/icons/delete_icon.png'
import RENAME_ICON from '../../assets/icons/rename_icon.png'

interface TaskInterface {
    key: string
    name: string
    isChecked: boolean
}

export default function Task(props: TaskInterface) {
    const { name, isChecked } = props
    const [task, setTask] = useState({ name, isChecked })
    const handleCheckboxChange = () => {
        setTask((prevTask) => ({
            ...prevTask,
            isChecked: !prevTask.isChecked,
        }))
    }
    return (
        <StyledSection>
            <StyledTaskContainer>
                <StyledCheckbox
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={handleCheckboxChange}
                ></StyledCheckbox>
                <StyledTaskName>{task.name}</StyledTaskName>
            </StyledTaskContainer>
            <StyledIconContainer>
                <StyledIconButton>
                    <img src={DELETE_ICON} alt="delete" />
                </StyledIconButton>
                <StyledIconButton>
                    <img src={RENAME_ICON} alt="delete" />
                </StyledIconButton>
            </StyledIconContainer>
        </StyledSection>
    )
}
