import React from 'react'

import AddTask from '@/components/AddTask/index'
import TasksProvider from '@/components/TaskContent'
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
