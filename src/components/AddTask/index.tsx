import { TaskStorage } from 'components/TaskContext'
import React, { useContext, useEffect, useState } from 'react'

import * as S from './styled'

export default function AddTask() {
    const { addTask, editTaskById, editingTaskId, getTaskById } =
        useContext(TaskStorage)
    const [taskName, setTaskName] = useState('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (editingTaskId) editTaskById(taskName)
        else if (taskName) addTask(taskName)
        setTaskName('')
    }
    useEffect(() => {
        if (editingTaskId) {
            const task = getTaskById(editingTaskId)
            setTaskName(task.name)
        }
    }, [editingTaskId, getTaskById])

    return (
        <S.StyledSection>
            <S.StyledLabel>
                <S.StyledLegend>Add a new task</S.StyledLegend>
                <S.StyledDisplay
                    value={taskName}
                    placeholder="input your task"
                    onInput={handleInput}
                />
            </S.StyledLabel>
            <S.StyledAddButton type="button" onClick={handleSubmit}>
                {editingTaskId ? 'Edit' : 'Add todo'}
            </S.StyledAddButton>
        </S.StyledSection>
    )
}
