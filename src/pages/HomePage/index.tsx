import TasksProvider from 'components/TaskContext'
import React from 'react'

import AddTask from '@/components/AddTask/index'
import TaskList from '@/components/TaskList'

export default function HomePage() {
    return (
        <>
            <TasksProvider>
                <AddTask />
                <TaskList />
            </TasksProvider>
        </>
    )
}
