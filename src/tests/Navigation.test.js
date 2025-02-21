import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import App from '@/App'

import '@testing-library/jest-dom'
import 'jest-styled-components'

describe('Theme Changer Tests', () => {
    const renderComponent = () => render(<App />)

    afterEach(() => {
        window.location.href = 'http://localhost/#/'
    })

    it('go to settings page', async () => {
        renderComponent()
        const settingsNavigation = screen.getAllByText(/Settings/i)[0]

        fireEvent.click(settingsNavigation)

        expect(window.location.href).toBe('http://localhost/#/settings')
    })

    it('go to home page', async () => {
        renderComponent()
        const settingsNavigation = screen.getAllByText(/Settings/i)[0]

        fireEvent.click(settingsNavigation)

        const homeNavigation = screen.getAllByText(/Home/i)[0]

        fireEvent.click(homeNavigation)

        expect(window.location.href).toBe('http://localhost/#/')
    })
})
