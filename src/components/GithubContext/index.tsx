import axios from 'axios'
import React, { createContext, useState } from 'react'

interface GithubStorageContextType {
    username: string
    imageLink: string
    error: string
    findUser: (username: string) => void
}

export const GithubStorage = createContext<GithubStorageContextType>(null)

const GITHUB_SEARCH_API_URL = 'https://api.github.com/users/'

export default function GithubContext({ children }: React.PropsWithChildren) {
    const [username, setUsername] = useState(null)
    const [imageLink, setImageLink] = useState(null)
    const [error, setError] = useState(null)

    const findUser = (username: string) => {
        axios
            .get(GITHUB_SEARCH_API_URL + username)
            .then((response) => {
                setError('')
                setUsername(response.data.login)
                setImageLink(response.data.avatar_url)
            })
            .catch((error) => {
                setUsername(username + ' not found')
                setImageLink('')
                switch (error.name) {
                    case 'AxiosError':
                        setError(error.message)
                        break
                    default:
                        setError('Unknown error')
                }
            })
    }

    return (
        <GithubStorage value={{ username, imageLink, error, findUser }}>
            {children}
        </GithubStorage>
    )
}
