import React from 'react'

import {
    StyledHeaderSwitchTheme,
    StyledSection,
    StyledSelect,
    StyledSwitchThemeContainer,
} from '@/components/ThemeChanger/style'
import { THEMES } from '@/constants/textConstants'

export default function ThemeChanger() {
    return (
        <StyledSwitchThemeContainer>
            <StyledHeaderSwitchTheme>Switch Theme</StyledHeaderSwitchTheme>
            <StyledSection>
                <StyledSelect id="theme">
                    <option>{THEMES.light}</option>
                    <option>{THEMES.dark}</option>
                </StyledSelect>
            </StyledSection>
        </StyledSwitchThemeContainer>
    )
}
