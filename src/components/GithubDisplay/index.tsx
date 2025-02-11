import React, { useContext, useEffect, useState } from 'react'

import GitHubLogoLightTheme from '@/assets/icons/ghlogo_dark.png'
import GitHubLogoDarkTheme from '@/assets/icons/ghlogo_light.png'
import { GithubStorage } from '@/components/GithubContext'
import { ThemeStorage } from '@/components/ThemeContext'
import { ThemeConstants } from '@/constants/themeConstants'

import * as S from './styled'

export default function GitHubDisplay() {
    const { username, imageLink } = useContext(GithubStorage)
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
                <S.StyledLoginText>Login: {username}</S.StyledLoginText>
                <S.StyledImg
                    src={imageLink ? imageLink : GitHubPlaceholder}
                    alt="github logo"
                ></S.StyledImg>
            </S.StyledGithubContainer>
        </S.StyledSection>
    )
}
