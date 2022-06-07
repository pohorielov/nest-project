import React, {useState,useContext, useEffect} from "react";
import ReactDOM from "react-dom";
import {useAuth} from "../hooks/auth.hook";
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";

export function AuthPageNew() {

    const {login, logout, token, userId} = useAuth()

    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        username: '', email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    // if (!open) return null


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/auth/registration', 'POST', {...form})
            message(data.message)
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/auth/login', 'POST', {...form})

            auth.login(data.token, data.userId, data.name)
        } catch (e) {

        }
    }

    const isAuthenticated = !!token //

    return ReactDOM.createPortal (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Navbar/>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={{width: 500}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{marginLeft: 400}}>x</button>
                            <h5 className="modal-title" id="exampleModalToggleLabel">Регистрация</h5>
                        </div>
                        <div className="modal-body">
                            <div className="card-content white-text">
                                <div>

                                    <div className="input-field">
                                        <input
                                            placeholder="Введите Имя"
                                            id="username"
                                            type="text"
                                            name="username"
                                            value={form.username}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="username">Имя</label>
                                    </div>

                                    <div className="input-field">
                                        <input
                                            placeholder="Введите Email"
                                            // id="email"
                                            type="text"
                                            name="email"
                                            value={form.email}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="input-field">
                                        <input
                                            placeholder="Введите пароль"
                                            // id="password"
                                            type="password"
                                            name="password"
                                            value={form.password}

                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="password">Пароль</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button
                                    className="btn yellow darken-4"
                                    // style={{marginRight: 10}}
                                    disabled={loading}
                                    onClick={registerHandler}
                                >
                                    Зарегистрироваться
                                </button>
                                <a
                                    style={{display: "flex", marginRight: 700, cursor: "pointer"}}
                                    // href="/"
                                    data-bs-target="#exampleModalToggle2"
                                    data-bs-toggle="modal" data-bs-dismiss="modal">Войти
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" style={{width: 500}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" style={{marginLeft: 400}}>x</button>
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Авторизация</h5>
                        </div>
                        <div className="modal-body">

                            <div className="card-content white-text">
                                <div>

                                    <div className="input-field">
                                        <input
                                            placeholder="Введите Email"
                                            id="email"
                                            type="text"
                                            name="email"
                                            value={form.email}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="input-field">
                                        <input
                                            placeholder="Введите пароль"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={form.password}
                                            onChange={changeHandler}
                                            disabled={loading}
                                        />
                                        <label htmlFor="password">Пароль</label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button
                                    className="btn yellow darken-4"
                                    // style={{marginRight: 10}}
                                    disabled={loading}
                                    onClick={loginHandler}
                                >
                                    Войти
                                </button>
                                <a
                                    style={{display: "flex", marginRight: 700, cursor: "pointer"}}
                                    // href="/"
                                    data-bs-target="#exampleModalToggle"
                                    data-bs-toggle="modal" data-bs-dismiss="modal">Регистрация
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btns" style={{margin: 180}}>
                <a style={{marginLeft: 400, marginRight: 10}} className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">РЕГИСТРАЦИЯ</a>
                <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle2" role="button">ВОЙТИ</a>
            </div>
            <Footer/>
        </AuthContext.Provider>,
        document.getElementById('portal2')
    )
}