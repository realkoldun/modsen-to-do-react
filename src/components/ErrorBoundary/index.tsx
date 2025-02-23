import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}
