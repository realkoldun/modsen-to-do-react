import React, { useState } from 'react'
import {
    StyledHeader,
    StyledHeaderText,
    StyledLinks,
    StyledA,
} from './css/HeaderStyle'
import {
    HEADER_APP_TITLE,
    HEADER_HOME_TITLE,
    HEADER_SETTINGS_TITLE,
} from '../../constants/textConstants'

export default function Header() {
    const [activeLink, setActiveLink] = useState('Settings')
    const handleLinkClick = (link: string) => {
        setActiveLink(link)
    }
    return (
        <StyledHeader>
            <StyledHeaderText>
                <h1>{HEADER_APP_TITLE}</h1>
                <StyledLinks>
                    <StyledA
                        $active={activeLink === HEADER_HOME_TITLE}
                        onClick={() => handleLinkClick(HEADER_HOME_TITLE)}
                    >
                        {HEADER_HOME_TITLE}
                    </StyledA>
                    <StyledA
                        $active={activeLink === HEADER_SETTINGS_TITLE}
                        onClick={() => handleLinkClick(HEADER_SETTINGS_TITLE)}
                    >
                        {HEADER_SETTINGS_TITLE}
                    </StyledA>
                </StyledLinks>
            </StyledHeaderText>
        </StyledHeader>
    )
}
