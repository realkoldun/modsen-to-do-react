import React from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header/Header'
import {
    HEADER_HOME_PATH,
    HEADER_SETTINGS_PATH
} from './constants/textConstants'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path={HEADER_HOME_PATH} element={<div>Home</div>} />
                    <Route path={HEADER_SETTINGS_PATH} element={<div>Settings</div>} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App