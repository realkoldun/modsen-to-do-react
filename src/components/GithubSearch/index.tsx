import React, { ChangeEvent, useState } from 'react'

import * as S from './styled'

import SEARCH_ICON from '@/assets/icons/search.png'
import { StyledInput } from '@/components/InputComponent/styled'

interface GithubSearchPropsType {
    findUser: (username: string) => void
}

export default function GitHubSearch({ findUser }: GithubSearchPropsType) {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setInputValue(changeEvent.currentTarget.value)
    }
    const handleOnClick = () => {
        const trimmedValue = inputValue.trim()
        if (!trimmedValue) return
        findUser(trimmedValue)
    }
    return (
        <>
            <S.StyledSection>
                <S.StyledLabel>
                    <S.StyledLegend>GitHub info</S.StyledLegend>
                    <S.StyledSearchContainer>
                        <StyledInput
                            value={inputValue}
                            onChange={handleInput}
                            placeholder="Search name..."
                            fullwidth={true}
                        />
                        <S.StyledSearchButton
                            onClick={handleOnClick}
                            type="button"
                        >
                            <S.StyledImg src={SEARCH_ICON} alt="search" />
                        </S.StyledSearchButton>
                    </S.StyledSearchContainer>
                </S.StyledLabel>
            </S.StyledSection>
        </>
    )
}
