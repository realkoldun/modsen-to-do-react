import React, { useContext } from 'react'

import GitHubLogo from '@/assets/icons/ghlogo.png'
import { GithubStorage } from '@/components/GithubContext'
import {
    StyledGithubContainer,
    StyledImg,
    StyledLoginText,
    StyledSection,
} from '@/components/GitHubDisplay/styled'

export default function GitHubDisplay() {
    const { username, imageLink } = useContext(GithubStorage)
    return (
        <StyledSection>
            <StyledGithubContainer>
                <StyledLoginText>Login {username}</StyledLoginText>
                <StyledImg src={GitHubLogo} alt="github logo">
                    {imageLink}
                </StyledImg>
            </StyledGithubContainer>
        </StyledSection>
    )
}
