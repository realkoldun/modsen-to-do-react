import React, { useContext, useState } from 'react'

import SEARCH_ICON from '@/assets/icons/search.png'
import { GithubStorage } from '@/components/GithubContext'

import * as S from './styled'

export default function GitHubSearch() {
    const { error, findUser } = useContext(GithubStorage)
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const handleOnClick = () => {
        findUser(inputValue)
    }
    return (
        <>
            <S.StyledSection>
                <S.StyledLabel>
                    <S.StyledLegend>GitHub info</S.StyledLegend>
                    <S.StyledDisplay
                        value={inputValue}
                        onChange={handleInput}
                        placeholder="Search name..."
                    ></S.StyledDisplay>
                </S.StyledLabel>
                <S.StyledSearchButton type="button">
                    <S.StyledImg
                        src={SEARCH_ICON}
                        onClick={handleOnClick}
                        alt="search"
                    />
                </S.StyledSearchButton>
            </S.StyledSection>
            {error && (
                <S.StyledErrorMessageText>{error}</S.StyledErrorMessageText>
            )}
        </>
    )
}
