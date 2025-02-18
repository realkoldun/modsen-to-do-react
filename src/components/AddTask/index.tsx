import React, {
    ChangeEvent,
    MouseEvent,
    useContext,
    useEffect,
    useState,
} from 'react'

import * as S from './styled'

import { StyledInput } from '@/components/InputComponent/styled'
import { TaskStorage } from '@/components/TaskContext'

export default function AddTask() {
    const { addTask, editTaskById, editingTaskId, getTaskById } =
        useContext(TaskStorage)
    const [taskName, setTaskName] = useState('')
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleSubmit = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
        mouseEvent.preventDefault()
        if (editingTaskId) editTaskById(taskName)
        else if (taskName.trim()) addTask(taskName)
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
                <StyledInput
                    fullwidth={false}
                    value={taskName}
                    placeholder="input your task"
                    onChange={handleInput}
                />
            </S.StyledLabel>
            <S.StyledAddButton type="button" onClick={handleSubmit}>
                {editingTaskId ? 'Edit' : 'Add todo'}
            </S.StyledAddButton>
        </S.StyledSection>
    )
}
