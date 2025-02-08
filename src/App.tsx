import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/Header/index'
import ThemeContext from '@/components/ThemeContext'
import { PATHES } from '@/constants/textConstants'
import HomePage from '@/pages/HomePage'
import SettingsPage from '@/pages/SettingsPage'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <ThemeContext>
                <GlobalStyle />
                <Router>
                    <Header />
                    <Routes>
                        <Route path={PATHES.home.path} element={<HomePage />} />
                        <Route
                            path={PATHES.settings.path}
                            element={<SettingsPage />}
                        />
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </Router>
            </ThemeContext>
        </>
    )
}

export default App
