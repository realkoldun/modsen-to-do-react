import React from 'react'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'

import ErrorBoundary from '@/components/ErrorBoundary'
import Header from '@/components/Header/index'
import ThemeContext from '@/components/ThemeContext'
import { PathesConstants } from '@/constants/pathesConstants'
import HomePage from '@/pages/HomePage'
import SettingsPage from '@/pages/SettingsPage'

//test

function App() {
    return (
        <ErrorBoundary>
            <ThemeContext>
                <GlobalStyle />
                <Router>
                    <Header />
                    <Routes>
                        <Route
                            path={PathesConstants.home.path}
                            element={<HomePage />}
                        />
                        <Route
                            path={PathesConstants.settings.path}
                            element={<SettingsPage />}
                        />
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </Router>
            </ThemeContext>
        </ErrorBoundary>
    )
}

export default App
