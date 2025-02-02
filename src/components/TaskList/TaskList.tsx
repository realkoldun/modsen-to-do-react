import React from 'react'
import {
    StyledDeleteButton,
    StyledHeaderText,
    StyledSection,
    StyledSeparateLine,
    StyledTasksContainer,
} from './css/TaskListStyle'
import Task from '../Task/Task'
import TaskClass from '../../utils/TaskClass'
import { nanoid } from 'nanoid'

const TASKS = [
    {
        name: 'kjfdkjdsjlkf',
        isCompleted: false,
    },
    {
        name: 'kjfdkjdsjlkdfsfdsfjfdsjhkfdhkjfdshkjfdjhksjhkfdskjhfdshkjfdshkjdshkfjksjhfdjhkfdsjhk',
        isCompleted: false,
    },
    {
        name: 'kjfdkjdsjlkf',
        isCompleted: false,
    },
    {
        name: 'kjfdkjdsjlkf',
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
        return (
            <Task
                key={nanoid()}
                name={task.taskName}
                isChecked={task.taskIsChecked}
            />
        )
    })

    return (
        <StyledSection>
            <StyledHeaderText>Task List</StyledHeaderText>
            <StyledSeparateLine />
            <StyledTasksContainer>{Tasks}</StyledTasksContainer>
            <StyledSeparateLine />
            <StyledDeleteButton>Deleted Selected</StyledDeleteButton>
        </StyledSection>
    )
}
