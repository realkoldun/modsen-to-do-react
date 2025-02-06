import React from 'react'

import GitHubSearch from '@/components/GitHubSearch'
import ThemeChanger from '@/components/ThemeChanger/index'
import { SettingsPageStyle } from '@/pages/SettingsPage/style'

export default function SettingsPage() {
    return (
        <>
            <SettingsPageStyle>
                <ThemeChanger />
                <GitHubSearch />
            </SettingsPageStyle>
        </>
    )
}
