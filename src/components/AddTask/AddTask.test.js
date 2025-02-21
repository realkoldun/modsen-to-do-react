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

    it('simple task add', async () => {
        renderComponent()
        const input = screen.getByPlaceholderText('input your task')
        const addButton = screen.getByText(/Add todo/i)

        expect(input).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.change(input, { target: { value: 'New Task' } })
        fireEvent.click(addButton)

        const taskElement = await screen.findByText('New Task')
        expect(taskElement).toBeInTheDocument()
    })

    it('empty task add', async () => {
        renderComponent()
        const input = screen.getByPlaceholderText('input your task')
        const addButton = screen.getByText(/Add todo/i)

        expect(input).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.change(input, { target: { value: '' } })
        fireEvent.click(addButton)

        const noTaskElement = await screen.findByText('No tasks')
        expect(noTaskElement).toBeInTheDocument()
    })

    it('add empty task with space', async () => {
        renderComponent()
        const input = screen.getByPlaceholderText('input your task')
        const addButton = screen.getByText(/Add todo/i)

        expect(input).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.change(input, { target: { value: '   ' } })
        fireEvent.click(addButton)

        const noTaskElement = await screen.findByText('No tasks')
        expect(noTaskElement).toBeInTheDocument()
    })

    it('add task with spaces before and after', async () => {
        renderComponent()
        const input = screen.getByPlaceholderText('input your task')
        const addButton = screen.getByText(/Add todo/i)

        expect(input).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()

        fireEvent.change(input, { target: { value: '     New Task     ' } })
        fireEvent.click(addButton)

        const taskElement = await screen.findByText('New Task')
        expect(taskElement).toBeInTheDocument()
    })
})
