import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/Header/index'
import { PATHES } from '@/constants/textConstants'
import Theme from '@/Theme'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <>
            <Theme>
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
            </Theme>
        </>
    )
}

export default App
