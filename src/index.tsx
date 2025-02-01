import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle'
import AddTask from './components/AddTask/AddTask'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header />
        <AddTask />
    </React.StrictMode>,
)
