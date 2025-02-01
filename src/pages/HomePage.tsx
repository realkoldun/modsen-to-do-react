import React from 'react'
import AddTask from '../components/AddTask/AddTask'
import TaskList from '../components/TaskList/TaskList'

export default function HomePage() {
    return (
        <>
            <AddTask />
            <TaskList />
        </>
    )
}
