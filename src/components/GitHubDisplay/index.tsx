import React, { useContext } from 'react'

import GitHubLogo from '@/assets/icons/ghlogo.png'
import { GithubStorage } from '@/components/GithubContext'
import * as S from '@/components/GitHubDisplay/styled'

export default function GitHubDisplay() {
    const { username, imageLink } = useContext(GithubStorage)
    return (
        <S.StyledSection>
            <S.StyledGithubContainer>
                <S.StyledLoginText>Login: {username}</S.StyledLoginText>
                <S.StyledImg
                    src={imageLink ? imageLink : GitHubLogo}
                    alt="github logo"
                ></S.StyledImg>
            </S.StyledGithubContainer>
        </S.StyledSection>
    )
}
