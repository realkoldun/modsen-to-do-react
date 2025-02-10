import { nanoid } from 'nanoid'
import React, { createContext, useState } from 'react'

import TaskInterface from '@/utils/TaskInterface'

interface TaskStorageContextType {
    tasks: TaskInterface[]
    addTask: (newTask: string) => void
    deleteTaskById: (id: string) => void
    deleteSelectedTasks: () => void
    checkTaskById: (id: string) => void
    editTaskById: (name: string) => void
    setEditingTaskId: (id: string) => void
    editingTaskId: string
    getTaskById: (id: string) => TaskInterface
}

export const TaskStorage = createContext<TaskStorageContextType | undefined>(
    undefined,
)

export default function TasksProvider({ children }: React.PropsWithChildren) {
    const [tasks, setTasks] = useState<TaskInterface[]>(
        JSON.parse(localStorage.getItem('tasks')) || [],
    )

    const [editingTaskId, setEditingTaskId] = useState<string>(null)

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

    const getTaskById = (taskId: string) => {
        return tasks.find((task) => task.id === taskId)
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

    const editTaskById = (newTaskName: string) => {
        const newTasks = tasks.map((task) => {
            if (task.id === editingTaskId) return { ...task, name: newTaskName }
            else return task
        })
        updateLocalStorage(newTasks)
        setEditingTaskId(null)
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
                setEditingTaskId,
                editingTaskId,
                getTaskById,
            }}
        >
            {children}
        </TaskStorage.Provider>
    )
}
