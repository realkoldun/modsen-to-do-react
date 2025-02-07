import React, { useState } from 'react'

import * as S from './styled'

export default function AddTask() {
    const [taskName, setTaskName] = useState('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    return (
        <S.StyledSection>
            <S.StyledLabel>
                <S.StyledLegend>Add a new task</S.StyledLegend>
                <S.StyledDisplay
                    value={taskName}
                    placeholder="input your task"
                    onInput={handleInput}
                ></S.StyledDisplay>
            </S.StyledLabel>
            <S.StyledAddButton type="button">{'Add todo'}</S.StyledAddButton>
        </S.StyledSection>
    )
}
