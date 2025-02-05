import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/Header/index'
import { PATHES } from '@/constants/textConstants'
import SettingsPage from '@/pages/SettingsPage'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path={PATHES.home} element={<div>Home</div>} />
                    <Route path={PATHES.settings} element={<SettingsPage />} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
