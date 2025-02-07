import React, { useContext, useState } from 'react'

import { TaskStorage } from '@/components/TaskContent'

import * as S from './styled'

export default function AddTask() {
    const { addTask } = useContext(TaskStorage)
    const [taskName, setTaskName] = useState('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (taskName) addTask(taskName)
        setTaskName('')
    }

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
                {'Add todo'}
            </S.StyledAddButton>
        </S.StyledSection>
    )
}
