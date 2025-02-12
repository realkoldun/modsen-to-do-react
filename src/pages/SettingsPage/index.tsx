import React from 'react'

import GithubContext from '@/components/GithubContext'
import ThemeChanger from '@/components/ThemeChanger/index'

import { SettingsPageStyle } from './styled'

export default function SettingsPage() {
    return (
        <>
            <SettingsPageStyle>
                <ThemeChanger />
                <GithubContext />
            </SettingsPageStyle>
        </>
    )
}
