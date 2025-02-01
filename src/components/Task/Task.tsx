import React, { useState } from 'react'
import {
    StyledCheckbox,
    StyledIconButton,
    StyledTaskContainer,
    StyledTaskName,
} from './css/TaskStyle'

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
            isChecked: !prevTask.isChecked, // Переключаем состояние
        }))
    }
    return (
        <StyledTaskContainer>
            <StyledCheckbox
                type="checkbox"
                checked={task.isChecked}
                onChange={handleCheckboxChange}
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
