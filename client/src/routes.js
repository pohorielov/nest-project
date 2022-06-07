import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {NamePage} from "./pages/NamePage";
import {AuthPage} from "./pages/AuthPage"
import {AuthPageNew} from "./pages/AuthPageNew";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/name" element={<NamePage />} />
                <Route path="/*" element={<Navigate replace to="/name" />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthPageNew />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}