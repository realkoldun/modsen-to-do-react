import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/Header/index'
import {
    HEADER_HOME_PATH,
    HEADER_SETTINGS_PATH,
} from '@/constants/textConstants'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path={HEADER_HOME_PATH} element={<div>Home</div>} />
                    <Route
                        path={HEADER_SETTINGS_PATH}
                        element={<div>Settings</div>}
                    />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
