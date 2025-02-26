import React, { useState } from 'react'

import GitHubDisplay from '../GithubDisplay'
import GitHubSearch from '../GithubSearch'

import githubSearchAPI from '@/api/githubSearchAPI'

export default function GithubComponent() {
    const [username, setUsername] = useState(null)
    const [imageLink, setImageLink] = useState(null)

    const findUser = async (username: string) => {
        try {
            const data = await githubSearchAPI(username)
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
