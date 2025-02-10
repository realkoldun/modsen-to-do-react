import React from 'react'

import ThemeChanger from '@/components/ThemeChanger/index'

import { SettingsPageStyle } from './styled'

export default function SettingsPage() {
    return (
        <>
            <SettingsPageStyle>
                <ThemeChanger />
            </SettingsPageStyle>
        </>
    )
}
