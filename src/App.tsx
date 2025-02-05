import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/Header/index'
import { PATHES } from '@/constants/textConstants'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path={PATHES.home} element={<div>Home</div>} />
                    <Route
                        path={PATHES.settings}
                        element={<div>Settings</div>}
                    />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
