import React from 'react'

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/settings" element={<div>Settings</div>} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
