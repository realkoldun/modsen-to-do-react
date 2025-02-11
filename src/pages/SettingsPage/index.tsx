import React from 'react'

import GithubContext from '@/components/GithubContext'
import GitHubDisplay from '@/components/GithubDisplay'
import GitHubSearch from '@/components/GithubSearch'
import ThemeChanger from '@/components/ThemeChanger/index'

import { SettingsPageStyle } from './styled'

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
