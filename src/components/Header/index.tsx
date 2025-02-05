import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
    HEADER_HOME_PATH,
    HEADER_HOME_TITLE,
    HEADER_SETTINGS_PATH,
    HEADER_SETTINGS_TITLE,
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
                        $active={activeLink === HEADER_HOME_PATH}
                        onClick={() => {
                            nav(HEADER_HOME_PATH)
                        }}
                    >
                        {HEADER_HOME_TITLE}
                    </StyledLink>
                    <StyledLink
                        $active={activeLink === HEADER_SETTINGS_PATH}
                        onClick={() => {
                            nav(HEADER_SETTINGS_PATH)
                        }}
                    >
                        {HEADER_SETTINGS_TITLE}
                    </StyledLink>
                </StyledLinks>
            </StyledHeaderText>
        </StyledHeader>
    )
}
