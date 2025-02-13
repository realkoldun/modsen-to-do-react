import React, { useContext, useEffect, useState } from 'react'

import * as S from './styled'
import GithubLogoLightTheme from '@/assets/icons/ghlogo_dark.png'
import GithubLogoDarkTheme from '@/assets/icons/ghlogo_light.png'
import { ThemeStorage } from '@/components/ThemeContext'
import { ThemeConstants } from '@/constants/themeConstants'

interface GithubDisplayPropsType {
    username: string
    imageLink: string
}

export default function GitHubDisplay(props: GithubDisplayPropsType) {
    const { currentTheme } = useContext(ThemeStorage)
    const { imageLink, username } = props
    const [GithubPlaceholder, setGithubPlaceholder] = useState(
        currentTheme === ThemeConstants.dark
            ? GithubLogoDarkTheme
            : GithubLogoLightTheme,
    )

    useEffect(() => {
        if (currentTheme === ThemeConstants.dark)
            setGithubPlaceholder(GithubLogoDarkTheme)
        else setGithubPlaceholder(GithubLogoLightTheme)
    }, [currentTheme])

    return (
        <S.StyledSection>
            <S.StyledGithubContainer>
                <S.StyledLoginText>Login: {username}</S.StyledLoginText>
                <S.StyledImg
                    src={imageLink ? imageLink : GithubPlaceholder}
                    alt="github logo"
                />
            </S.StyledGithubContainer>
        </S.StyledSection>
    )
}
