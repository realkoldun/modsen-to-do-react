import React, { useContext } from 'react'

import * as S from './styled'

import githubLogoLightTheme from '@/assets/icons/ghlogo_dark.png'
import githubLogoDarkTheme from '@/assets/icons/ghlogo_light.png'
import { ThemeStorage } from '@/components/ThemeContext'
import { ThemeConstants } from '@/constants/themeConstants'

interface GithubDisplayPropsType {
    username: string
    imageLink: string
}

export default function GitHubDisplay({
    imageLink,
    username,
}: GithubDisplayPropsType) {
    const { currentTheme } = useContext(ThemeStorage)
    const githubPlaceholder =
        currentTheme === ThemeConstants.dark
            ? githubLogoDarkTheme
            : githubLogoLightTheme

    return (
        <S.StyledSection>
            <S.StyledGithubContainer>
                <S.StyledLoginText>Login: {username}</S.StyledLoginText>
                <S.StyledImg
                    src={imageLink ? imageLink : githubPlaceholder}
                    alt="github logo"
                />
            </S.StyledGithubContainer>
        </S.StyledSection>
    )
}
