import {createContext} from 'react'

function noop(userName) {
    console.log(userName)
}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
