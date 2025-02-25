import React, { useContext, useEffect, useState } from 'react'

import * as S from './styled'

import TaskComponent from '@/components/TaskComponent'
import { TaskStorage } from '@/components/TaskContext'
import TaskInterface from '@/utils/TaskInterface'

function TaskList() {
    const { tasks, deleteSelectedTasks } = useContext(TaskStorage)
    const [isOneTasksChecked, setOneTasksChecked] = useState(false)
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

    useEffect(() => {
        if (tasks.some((task) => task.isChecked)) {
            setOneTasksChecked(true)
        } else setOneTasksChecked(false)
    }, [tasks])

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
                    {isOneTasksChecked && (
                        <S.StyledDeleteButton onClick={deleteSelectedTasks}>
                            Deleted Selected
                        </S.StyledDeleteButton>
                    )}
                </>
            )}
        </S.StyledSection>
    )
}

export default TaskList
