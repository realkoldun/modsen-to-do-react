import React from 'react'

import * as S from './styled'

export default function AddTask() {
    return (
        <S.StyledSection>
            <S.StyledLabel>
                <S.StyledLegend>Add a new task</S.StyledLegend>
                <S.StyledDisplay placeholder="input your task"></S.StyledDisplay>
            </S.StyledLabel>
            <S.StyledAddButton type="button">{'Add todo'}</S.StyledAddButton>
        </S.StyledSection>
    )
}
