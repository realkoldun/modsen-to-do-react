import React, { ChangeEvent, useState } from 'react'

import * as S from './styled'
import SEARCH_ICON from '@/assets/icons/search.png'
import { StyledInput } from '@/components/InputComponent/styled'

interface GithubSearchPropsType {
    findUser: (username: string) => void
}

export default function GitHubSearch(props: GithubSearchPropsType) {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
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
                    <S.StyledSearchContainer>
                        <StyledInput
                            isFullWidth={true}
                            value={inputValue}
                            onChange={handleInput}
                            placeholder="Search name..."
                        />
                        <S.StyledSearchButton type="button">
                            <S.StyledImg
                                src={SEARCH_ICON}
                                onClick={handleOnClick}
                                alt="search"
                            />
                        </S.StyledSearchButton>
                    </S.StyledSearchContainer>
                </S.StyledLabel>
            </S.StyledSection>
        </>
    )
}
