import React from 'react'
import {
    StyledHeaderText,
    StyledSection,
    StyledSeparateLine,
} from './css/TaskListStyle'
import './../../assets/icons/delete_icon.png'
import './../../assets/icons/rename_icon.png'
import Task from '../Task/Task'
import TaskClass from '../../utils/TaskClass'

const TASKS = [
    {
        name: 'kjfdkjdsjlkf',
        isCompleted: false,
    },
    {
        name: 'kjfdkjdsjlkdfsfdsf',
        isCompleted: false,
    },
    {
        name: 'kjfdkjdsjlkf',
        isCompleted: false,
    },
]
const TASK_LIST = TASKS.map(
    (task) => new TaskClass(task.name, task.isCompleted),
)

export default function TaskList() {
    const Tasks = TASK_LIST.map((task) => {
        return <Task name={task.taskName} isChecked={task.taskIsChecked} />
    })

    return (
        <StyledSection>
            <StyledHeaderText>Task List</StyledHeaderText>
            <StyledSeparateLine />
            {Tasks}
            <StyledSeparateLine />
        </StyledSection>
    )
}
