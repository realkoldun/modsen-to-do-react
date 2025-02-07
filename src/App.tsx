import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@/components/Header/index'
import { PATHES } from '@/constants/textConstants'
import { theme } from '@/constants/theme'
import HomePage from '@/pages/HomePage'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router>
                    <Header />
                    <Routes>
                        <Route path={PATHES.home.path} element={<HomePage />} />
                        <Route
                            path={PATHES.settings.path}
                            element={<div>Settings</div>}
                        />
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
