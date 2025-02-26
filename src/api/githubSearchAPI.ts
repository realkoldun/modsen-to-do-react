import axios from 'axios'

const GITHUB_SEARCH_API_URL = 'https://api.github.com/users/'

export default function githubSearchAPI(username: string) {
    return axios
        .get(GITHUB_SEARCH_API_URL + username)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            throw new Error(error)
        })
}
