import React, { useContext, useEffect, useState } from 'react'

import GitHubLogoLightTheme from '@/assets/icons/ghlogo_dark.png'
import GitHubLogoDarkTheme from '@/assets/icons/ghlogo_light.png'
import { ThemeStorage } from '@/components/ThemeContext'
import { ThemeConstants } from '@/constants/themeConstants'

import * as S from './styled'

interface GithubDisplayPropsType {
    username: string
    imageLink: string
}

export default function GitHubDisplay(props: GithubDisplayPropsType) {
    const { currentTheme } = useContext(ThemeStorage)
    const [GitHubPlaceholder, setGitHubPlaceholder] = useState(
        currentTheme === ThemeConstants.dark
            ? GitHubLogoDarkTheme
            : GitHubLogoLightTheme,
    )

    useEffect(() => {
        if (currentTheme === ThemeConstants.dark)
            setGitHubPlaceholder(GitHubLogoDarkTheme)
        else setGitHubPlaceholder(GitHubLogoLightTheme)
    }, [currentTheme])

    return (
        <S.StyledSection>
            <S.StyledGithubContainer>
                <S.StyledLoginText>Login: {props.username}</S.StyledLoginText>
                <S.StyledImg
                    src={props.imageLink ? props.imageLink : GitHubPlaceholder}
                    alt="github logo"
                ></S.StyledImg>
            </S.StyledGithubContainer>
        </S.StyledSection>
    )
}
