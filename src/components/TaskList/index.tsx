import { TaskStorage } from 'components/TaskContext'
import React, { useContext } from 'react'

import TaskComponent from '@/components/TaskComponent'
import TaskInterface from '@/utils/TaskInterface'

import * as S from './styled'

export default function TaskList() {
    const { tasks, deleteSelectedTasks } = useContext(TaskStorage)
    const Tasks = () => {
        return tasks.map((task: TaskInterface) => {
            return (
                <TaskComponent
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    isChecked={task.isChecked}
                />
            )
        })
    }
    const handleDeleteSelectedTask = () => {
        deleteSelectedTasks()
    }

    return (
        <S.StyledSection>
            <S.StyledHeaderText>Task List</S.StyledHeaderText>

            {tasks.length === 0 ? (
                <S.StyledHeaderText>No tasks</S.StyledHeaderText>
            ) : (
                <>
                    <S.StyledSeparateLine />
                    <S.StyledTasksContainer>
                        <Tasks />
                    </S.StyledTasksContainer>
                    <S.StyledSeparateLine />
                    <S.StyledDeleteButton onClick={handleDeleteSelectedTask}>
                        Deleted Selected
                    </S.StyledDeleteButton>
                </>
            )}
        </S.StyledSection>
    )
}
