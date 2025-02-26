import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useState,
} from 'react'

import { nanoid } from 'nanoid'

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

export default function TasksProvider({ children }: PropsWithChildren) {
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const [editingTaskId, setEditingTaskId] = useState<string>(null)

    const addTask = useCallback(
        (newTask: string) => {
            const newTasks = [
                {
                    name: newTask,
                    id: nanoid(),
                    isChecked: false,
                },
                ...tasks,
            ]
            setTasks(newTasks)
        },
        [tasks, setTasks],
    )

    const getTaskById = useCallback(
        (taskId: string) => {
            return tasks.find((task: TaskInterface) => task.id === taskId)
        },
        [tasks],
    )

    const deleteTaskById = useCallback(
        (taskId: string) => {
            const newTasks = tasks.filter(
                (task: TaskInterface) => task.id !== taskId,
            )
            setTasks(newTasks)
        },
        [tasks, setTasks],
    )

    const deleteSelectedTasks = useCallback(() => {
        const newTasks = tasks.filter((task: TaskInterface) => !task.isChecked)
        setTasks(newTasks)
    }, [tasks, setTasks])

    const checkTaskById = useCallback(
        (taskId: string) => {
            const newTasks = tasks.map((task: TaskInterface) => {
                if (task.id === taskId) {
                    const newIsChecked = !task.isChecked
                    return { ...task, isChecked: newIsChecked }
                } else return task
            })
            setTasks(newTasks)
        },
        [tasks, setTasks],
    )

    const editTaskById = useCallback(
        (newTaskName: string) => {
            const newTasks = tasks.map((task: TaskInterface) => {
                if (task.id === editingTaskId)
                    return { ...task, name: newTaskName }
                else return task
            })
            setTasks(newTasks)
            setEditingTaskId(null)
        },
        [tasks, editingTaskId, setTasks],
    )

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
