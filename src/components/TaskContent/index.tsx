import { nanoid } from 'nanoid'
import React, { createContext, useState } from 'react'

import TaskInterface from '@/components/utils/TaskInterface'

interface TaskStorageContextType {
    tasks: TaskInterface[]
    addTask: (newTask: string) => void
    deleteTaskById: (id: string) => void
    deleteSelectedTasks: () => void
    checkTaskById: (id: string) => void
    editTaskById: (id: string, name: string) => void
}

export const TaskStorage = createContext<TaskStorageContextType | undefined>(
    undefined,
)

export default function TasksProvider({ children }: React.PropsWithChildren) {
    const [tasks, setTasks] = useState<TaskInterface[]>(
        JSON.parse(localStorage.getItem('tasks')) || [],
    )

    const updateLocalStorage = (newTasks: TaskInterface[]) => {
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const addTask = (newTask: string) => {
        const newTasks = [
            {
                name: newTask,
                id: nanoid(),
                isChecked: false,
            },
            ...tasks,
        ]
        updateLocalStorage(newTasks)
    }

    const deleteTaskById = (taskId: string) => {
        const newTasks = tasks.filter((task) => task.id !== taskId)
        updateLocalStorage(newTasks)
    }

    const deleteSelectedTasks = () => {
        const newTasks = tasks.filter((task) => !task.isChecked)
        updateLocalStorage(newTasks)
    }

    const checkTaskById = (taskId: string) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                const newIsChecked = !task.isChecked
                return { ...task, isChecked: newIsChecked }
            } else return task
        })
        updateLocalStorage(newTasks)
    }

    const editTaskById = (taskId: string, newTaskName: string) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) return { ...task, newTaskName }
            else return task
        })
        updateLocalStorage(newTasks)
    }

    return (
        <TaskStorage.Provider
            value={{
                tasks,
                addTask,
                deleteTaskById,
                deleteSelectedTasks,
                checkTaskById,
                editTaskById,
            }}
        >
            {children}
        </TaskStorage.Provider>
    )
}
