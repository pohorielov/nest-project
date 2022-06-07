import {useState, useCallback, useEffect} from 'react'
import {useDispatch} from "react-redux"
import {FETCHED_USER} from "../redux/types"
import decode from 'jwt-decode'


const storageName = 'userData'

export const useAuth = () => {

    const dispatch = useDispatch()

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)

        setUserId(id)

        const decoded = decode(jwtToken)
        const name = decoded.name

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))

        // dispatch({ type: FETCHED_USER, payload: [{ name }] })

        dispatch({ type: FETCHED_USER, payload: [{ name }] })


    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    return { login, logout, token, userId }
}