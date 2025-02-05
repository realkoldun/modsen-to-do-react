import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
    PATHES,
} from '@/constants/textConstants'

import {
    StyledHeader,
    StyledHeaderText,
    StyledLink,
    StyledLinks,
} from './style'

export default function Header() {
    const activeLink = useLocation().pathname
    const nav = useNavigate()
    return (
        <StyledHeader>
            <StyledHeaderText>
                <h1>Modsen Todo List</h1>
                <StyledLinks>
                    <StyledLink
                        $active={activeLink === PATHES.home}
                        onClick={() => {
                            nav(PATHES.home)
                        }}
                    >
                        Home
                    </StyledLink>
                    <StyledLink
                        $active={activeLink === PATHES.settings}
                        onClick={() => {
                            nav(PATHES.settings)
                        }}
                    >
                        Settings
                    </StyledLink>
                </StyledLinks>
            </StyledHeaderText>
        </StyledHeader>
    )
}
