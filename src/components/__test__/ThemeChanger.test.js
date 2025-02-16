import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-styled-components'

import ThemeContext from '@/components/ThemeContext'
import { darkTheme, lightTheme } from '@/constants/theme'
import { ThemeConstants } from '@/constants/themeConstants'
import { GlobalStyle } from '@/GlobalStyle'
import SettingsPage from '@/pages/SettingsPage'

describe('Theme Changer Tests', () => {
    const renderComponent = () =>
        render(
            <ThemeContext>
                <GlobalStyle />
                <SettingsPage />
            </ThemeContext>,
        )

    afterEach(() => {
        localStorage.clear()
    })

    it('should change to dark theme', async () => {
        renderComponent()
        const select = screen.getByRole('combobox')

        // eslint-disable-next-line testing-library/no-node-access
        const rootElement = document.querySelector('.sc-jMLmsk.iLsVwo')

        expect(rootElement).toHaveStyleRule('color', lightTheme.fontColor)

        fireEvent.change(select, { target: { value: ThemeConstants.dark } })

        await waitFor(() => {
            expect(rootElement).toHaveStyleRule('color', darkTheme.fontColor)
        })
    })

    it('should change to light theme', async () => {
        renderComponent()
        const select = screen.getByRole('combobox')

        // eslint-disable-next-line testing-library/no-node-access
        const rootElement = document.querySelector('.sc-jMLmsk.iLsVwo')

        expect(rootElement).toHaveStyleRule('color', lightTheme.fontColor)

        fireEvent.change(select, { target: { value: ThemeConstants.dark } })
        fireEvent.change(select, { target: { value: ThemeConstants.light } })

        await waitFor(() => {
            expect(rootElement).toHaveStyleRule('color', lightTheme.fontColor)
        })
    })
})
