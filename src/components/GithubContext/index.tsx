import React, { createContext, useState } from 'react'

interface GithubStorageContextType {
    username: string
    imageLink: string
    findUser: (username: string) => void
}

export const GithubStorage = createContext<
    GithubStorageContextType | undefined
>(undefined)

export default function GithubContext({ children }: React.PropsWithChildren) {
    const [username, setUsername] = useState(null)
    const [imageLink, setImageLink] = useState(null)

    const findUser = (username: string) => {
        setUsername(username)
        setImageLink('')
    }

    return (
        <GithubStorage value={{ username, imageLink, findUser }}>
            {children}
        </GithubStorage>
    )
}
