import React, { useContext } from 'react'

import * as S from '@/components/ThemeChanger/styled'
import { ThemeStorage } from '@/components/ThemeContext'
import { THEMES } from '@/constants/textConstants'

export default function ThemeChanger() {
    const { currentTheme, changeTheme } = useContext(ThemeStorage)

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.currentTarget.value
        if (newTheme !== currentTheme) changeTheme(newTheme)
    }

    return (
        <S.StyledSwitchThemeContainer>
            <S.StyledHeaderSwitchTheme>Switch Theme</S.StyledHeaderSwitchTheme>
            <S.StyledSection>
                <S.StyledSelect value={currentTheme} onChange={handleOnChange}>
                    <option value={THEMES.light}>{THEMES.light}</option>
                    <option value={THEMES.dark}>{THEMES.dark}</option>
                </S.StyledSelect>
            </S.StyledSection>
        </S.StyledSwitchThemeContainer>
    )
}
