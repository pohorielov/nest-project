import React from "react"
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import 'materialize-css'

function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuthenticated = !!token

    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                <div>
                    {/*<Navbar/>*/}
                            {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    )
}

export default App
