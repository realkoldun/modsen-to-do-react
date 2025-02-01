import React, { useState } from 'react'
import {
    StyledCheckbox,
    StyledIconButton,
    StyledTaskContainer,
    StyledTaskName,
} from './css/TaskStyle'
import TaskClass from '../../utils/TaskClass'
import { StyledSeparateLine } from '../TaskList/css/TaskListStyle'

interface Task {
    name: string
    isChecked: boolean
}

export default function Task({ name, isChecked }: Task) {
    const [task, setTask] = useState({ name, isChecked })
    return (
        <StyledTaskContainer>
            <StyledCheckbox
                type="checkbox"
                checked={task.isChecked}
            ></StyledCheckbox>
            <StyledTaskName>{task.name}</StyledTaskName>
            <StyledIconButton>
                <img src="./../../assets/icons/rename_icon.png" alt="rename" />
            </StyledIconButton>
            <StyledIconButton>
                <img src="./../../assets/icons/delete_icon.png" alt="delete" />
            </StyledIconButton>
        </StyledTaskContainer>
    )
}
