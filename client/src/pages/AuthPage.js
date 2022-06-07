import React, {useState} from "react"
// import {useAuth} from "../hooks/auth.hook";
// import {useRoutes} from "../routes";
// import {AuthContext} from "../context/AuthContext";
import {RegisterModal} from "../components/RegisterModal";
import {LoginModal} from "../components/LoginModal";

export const AuthPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)


    return (
                <div
                    className="container"
                    style={{display: "flex", justifyContent: "center"}}
                >
                    <div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn modal-trigger"
                            style={{marginRight: 10, marginTop: 300}}
                        >
                            Регистрация
                        </button>

                        <RegisterModal open={isOpen} onClose={() => setIsOpen(false)} />
                    </div>

                    <div>
                        <button
                            onClick={() => setIsOpen1(true)}
                            className="btn modal-trigger"
                            style={{marginTop: 300}}
                        >
                            Войти
                        </button>

                        <LoginModal open={isOpen1} onClose={() => setIsOpen1(false)} />
                    </div>
                </div>
    )
}