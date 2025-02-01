import React, { useState } from 'react'

import {
    StyledHeader,
    StyledHeaderText,
    StyledLinks,
    StyledLink,
} from './css/HeaderStyle'

import {
    HEADER_APP_TITLE,
    HEADER_HOME_TITLE,
    HEADER_SETTINGS_TITLE,
} from '../../constants/textConstants'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [activeLink, setActiveLink] = useState(HEADER_HOME_TITLE)
    const handleLinkClick = (link: string) => {
        setActiveLink(link)
    }
    const nav = useNavigate()
    return (
        <StyledHeader>
            <StyledHeaderText>
                <h1>{HEADER_APP_TITLE}</h1>
                <StyledLinks>
                    <StyledLink
                        $active={activeLink === HEADER_HOME_TITLE}
                        onClick={() => {
                            handleLinkClick(HEADER_HOME_TITLE)
                            nav('/')
                        }}
                    >
                        {HEADER_HOME_TITLE}
                    </StyledLink>
                    <StyledLink
                        $active={activeLink === HEADER_SETTINGS_TITLE}
                        onClick={() => {
                            handleLinkClick(HEADER_SETTINGS_TITLE)
                            nav('/settings')
                        }}
                    >
                        {HEADER_SETTINGS_TITLE}
                    </StyledLink>
                </StyledLinks>
            </StyledHeaderText>
        </StyledHeader>
    )
}
