import React, { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { THEMES } from '@/constants/textConstants'
import { darkTheme, lightTheme } from '@/constants/theme'

type ThemeType = typeof lightTheme | typeof darkTheme

interface ThemeStorageContextType {
    currentTheme: string
    changeTheme: (theme: string) => void
}

export const ThemeStorage = createContext<ThemeStorageContextType | undefined>(
    undefined,
)

export default function ThemeContext({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = useState<ThemeType>(lightTheme)
    const [currentTheme, setCurrentTheme] = useState<string>(THEMES.light)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            changeTheme(storedTheme)
        }
    }, [])

    const changeTheme = (newTheme: string): void => {
        switch (newTheme) {
            case THEMES.dark:
                setTheme(darkTheme)
                localStorage.setItem('theme', THEMES.dark)
                break
            case THEMES.light:
                setTheme(lightTheme)
                localStorage.setItem('theme', THEMES.light)
                break
            default:
                break
        }
        setCurrentTheme(newTheme)
    }

    return (
        <ThemeStorage.Provider value={{ currentTheme, changeTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeStorage.Provider>
    )
}
