import { nanoid } from 'nanoid'
import React, { createContext, useState } from 'react'

import TaskInterface from '@/utils/TaskInterface'
import { useLocalStorage } from '@/utils/useLocalStorage'

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
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const [editingTaskId, setEditingTaskId] = useState<string>(null)

    const addTask = (newTask: string) => {
        const newTasks = [
            {
                name: newTask,
                id: nanoid(),
                isChecked: false,
            },
            ...tasks,
        ]
        setTasks(newTasks)
    }

    const getTaskById = (taskId: string) => {
        return tasks.find((task: TaskInterface) => task.id === taskId)
    }

    const deleteTaskById = (taskId: string) => {
        const newTasks = tasks.filter(
            (task: TaskInterface) => task.id !== taskId,
        )
        setTasks(newTasks)
    }

    const deleteSelectedTasks = () => {
        const newTasks = tasks.filter((task: TaskInterface) => !task.isChecked)
        setTasks(newTasks)
    }

    const checkTaskById = (taskId: string) => {
        const newTasks = tasks.map((task: TaskInterface) => {
            if (task.id === taskId) {
                const newIsChecked = !task.isChecked
                return { ...task, isChecked: newIsChecked }
            } else return task
        })
        setTasks(newTasks)
    }

    const editTaskById = (newTaskName: string) => {
        const newTasks = tasks.map((task: TaskInterface) => {
            if (task.id === editingTaskId) return { ...task, name: newTaskName }
            else return task
        })
        setTasks(newTasks)
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
