import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/constants/theme'

interface ThemeProps {
    children: React.ReactNode
}

export default function Theme({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
