import React, { createContext, PropsWithChildren, useState } from 'react'

import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '@/constants/theme'
import { ThemeConstants } from '@/constants/themeConstants'

type ThemeType = typeof lightTheme | typeof darkTheme

interface ThemeStorageContextType {
    currentTheme: string
    changeTheme: (theme: string) => void
}

export const ThemeStorage = createContext<ThemeStorageContextType>(null)

export default function ThemeContext({ children }: PropsWithChildren) {
    const [currentTheme, setCurrentTheme] = useState<string>(
        localStorage.getItem('theme')
            ? localStorage.getItem('theme')
            : ThemeConstants.light,
    )
    const [theme, setTheme] = useState<ThemeType>(
        currentTheme === ThemeConstants.dark ? darkTheme : lightTheme,
    )

    const changeTheme = (newTheme: string): void => {
        switch (newTheme) {
            case ThemeConstants.dark:
                setTheme(darkTheme)
                localStorage.setItem('theme', ThemeConstants.dark)
                break
            case ThemeConstants.light:
                setTheme(lightTheme)
                localStorage.setItem('theme', ThemeConstants.light)
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
