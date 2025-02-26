import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-styled-components'
import GithubComponent from '@/components/GithubComponent'
import ThemeContext from '@/components/ThemeContext'

describe('Theme Changer Tests', () => {
    const renderComponent = () =>
        render(
            <ThemeContext>
                <GithubComponent />
            </ThemeContext>,
        )
    it('get github info', async () => {
        renderComponent()

        const username = 'koldun'

        const searchPanel = screen.getAllByPlaceholderText('Search name...')[0]

        const searchButton = screen.getByRole('button')
        fireEvent.change(searchPanel, { target: { value: username } })
        fireEvent.click(searchButton)

        await waitFor(() => {
            const resultPanel = screen.getByRole('paragraph')
            expect(resultPanel.textContent).toBe(`Login: ${username}`)
        })
    })

    it('invalid github info', async () => {
        renderComponent()
        const invalidUsername = 'nonexistentuser'

        const searchPanel = screen.getAllByPlaceholderText('Search name...')[0]
        const searchButton = screen.getByRole('button')

        fireEvent.change(searchPanel, { target: { value: invalidUsername } })
        fireEvent.click(searchButton)

        const resultPanel = screen.getByRole('paragraph')

        await waitFor(() => {
            expect(resultPanel.textContent).toBe(
                `Login: ${invalidUsername} not found`,
            )
        })
    })
})
