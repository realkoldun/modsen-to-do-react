import React from 'react'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'

import ThemeContext from '@/components/ThemeContext'
import HomePage from '@/pages/HomePage'

describe('Add Task Tests', () => {
    const renderComponent = () =>
        render(
            <ThemeContext>
                <HomePage />
            </ThemeContext>,
        )

    afterEach(() => {
        localStorage.clear()
    })

    it('simple edit task', async () => {
        renderComponent()
        const input = screen.getByPlaceholderText('input your task')
        const addButton = screen.getByText(/Add todo/i)

        expect(input).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(addButton)

        const taskElement = await screen.findByText('New Task')
        expect(taskElement).toBeInTheDocument()

        const editButton = screen.getByAltText('edit')
        fireEvent.click(editButton)

        const subminEditButton = screen.getByText('Edit')
        fireEvent.change(input, { target: { value: 'Edit Task' } })
        fireEvent.click(subminEditButton)

        const editTaskElement = await screen.findByText('Edit Task')
        expect(editTaskElement).toBeInTheDocument()
    })
})
