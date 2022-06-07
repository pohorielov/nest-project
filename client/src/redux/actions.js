import{FETCHED_USER} from './types'

export async function fetchedUser(dispatch) {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()

        dispatch({ type: FETCHED_USER, payload: json })
}