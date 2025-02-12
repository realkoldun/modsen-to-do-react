import React, { useState } from 'react'

import SEARCH_ICON from '@/assets/icons/search.png'

import * as S from './styled'

interface GithubSearchPropsType {
    findUser: (username: string) => void
}

export default function GitHubSearch(props: GithubSearchPropsType) {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const handleOnClick = () => {
        props.findUser(inputValue)
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
        </>
    )
}
