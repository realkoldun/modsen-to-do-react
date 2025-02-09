import React from 'react'

import GithubContext from '@/components/GithubContext'
import GitHubDisplay from '@/components/GitHubDisplay'
import GitHubSearch from '@/components/GitHubSearch'
import ThemeChanger from '@/components/ThemeChanger/index'
import { SettingsPageStyle } from '@/pages/SettingsPage/styled'

export default function SettingsPage() {
    return (
        <>
            <SettingsPageStyle>
                <ThemeChanger />
                <GithubContext>
                    <GitHubSearch />
                    <GitHubDisplay />
                </GithubContext>
            </SettingsPageStyle>
        </>
    )
}
