import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header />
        <AddTask />
        <TaskList />
    </React.StrictMode>,
)
