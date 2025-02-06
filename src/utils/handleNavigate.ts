import { NavigateFunction } from 'react-router-dom'

export default function handleNavigate(
    path: string,
    nav: NavigateFunction,
): void {
    nav(path)
}
