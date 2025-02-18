import React from 'react'

import GithubComponent from 'components/GithubComponent'

import { SettingsPageStyle } from './styled'

import ThemeChanger from '@/components/ThemeChanger/index'

export default function SettingsPage() {
    return (
        <>
            <SettingsPageStyle>
                <ThemeChanger />
                <GithubComponent />
            </SettingsPageStyle>
        </>
    )
}
