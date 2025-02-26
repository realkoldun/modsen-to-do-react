import React, { ChangeEvent, useContext } from 'react'

import * as S from '@/components/ThemeChanger/styled'
import { ThemeStorage } from '@/components/ThemeContext'
import { ThemeConstants } from '@/constants/themeConstants'

export default function ThemeChanger() {
    const { currentTheme, changeTheme } = useContext(ThemeStorage)

    const handleOnChange = (changeEvent: ChangeEvent<HTMLSelectElement>) => {
        const newTheme = changeEvent.currentTarget.value
        if (newTheme !== currentTheme) changeTheme(newTheme)
    }

    return (
        <S.StyledSwitchThemeContainer>
            <S.StyledHeaderSwitchTheme>Switch Theme</S.StyledHeaderSwitchTheme>
            <S.StyledSection>
                <S.StyledSelect value={currentTheme} onChange={handleOnChange}>
                    <option value={ThemeConstants.light}>
                        {ThemeConstants.light}
                    </option>
                    <option value={ThemeConstants.dark}>
                        {ThemeConstants.dark}
                    </option>
                </S.StyledSelect>
            </S.StyledSection>
        </S.StyledSwitchThemeContainer>
    )
}
