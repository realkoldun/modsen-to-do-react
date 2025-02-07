import React, { useContext, useState } from 'react'

import DELETE_ICON from '@/assets/icons/delete_icon.png'
import RENAME_ICON from '@/assets/icons/rename_icon.png'
import { TaskStorage } from '@/components/TaskContent'

import * as S from './styled'

interface TaskInterface {
    key: string
    id: string
    name: string
    isChecked: boolean
}

export default function TaskComponent(props: TaskInterface) {
    const { id, name, isChecked } = props
    const { deleteTaskById, checkTaskById, setEditingTaskId } =
        useContext(TaskStorage)
    const [task, setTask] = useState({ name, isChecked })

    const handleCheckboxChange = () => {
        setTask((prevTask) => ({
            ...prevTask,
            isChecked: !prevTask.isChecked,
        }))
        checkTaskById(id)
    }

    const handleDeleteById = () => deleteTaskById(id)

    const handleEditTask = () => setEditingTaskId(id)

    return (
        <S.StyledSection>
            <S.StyledTaskContainer>
                <S.StyledCheckbox
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={handleCheckboxChange}
                ></S.StyledCheckbox>
                <S.StyledTaskName>{task.name}</S.StyledTaskName>
            </S.StyledTaskContainer>
            <S.StyledIconContainer>
                <S.StyledIconButton onClick={handleDeleteById}>
                    <S.StyledImg src={DELETE_ICON} alt="delete" />
                </S.StyledIconButton>
                <S.StyledIconButton onClick={handleEditTask}>
                    <S.StyledImg src={RENAME_ICON} alt="delete" />
                </S.StyledIconButton>
            </S.StyledIconContainer>
        </S.StyledSection>
    )
}
