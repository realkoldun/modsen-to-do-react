import React, { useState } from 'react'

import GitHubDisplay from '@/components/GithubDisplay'
import GitHubSearch from '@/components/GithubSearch'
import GithubSearchAPI from '@/utils/GithubSearchAPI'

export default function GithubContext() {
    const [username, setUsername] = useState(null)
    const [imageLink, setImageLink] = useState(null)

    const findUser = async (username: string) => {
        try {
            const data = await GithubSearchAPI(username)
            setUsername(data.login)
            setImageLink(data.avatar_url)
        } catch (error) {
            setUsername(username + ' not found')
            setImageLink('')
        }
    }

    return (
        <>
            <GitHubSearch findUser={findUser} />
            <GitHubDisplay username={username} imageLink={imageLink} />
        </>
    )
}
