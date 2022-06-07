import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: 500,
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export function RegisterModal({ open, children, onClose }) {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        username: '', email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    if (!open) return null

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

    return ReactDOM.createPortal (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <div className="modal-content">
                    <button
                        className="modal-close waves-effect waves-green btn-flat"
                        style={{marginLeft: 370, background: 'red', color: 'white'}}
                        onClick={onClose}
                    >
                        X
                    </button>
                    {children}

                    <div className="row">
                        <h4>Регистрация</h4>
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
                                style={{display: "flex", marginRight: 700}}
                                href="/"
                                // className=""
                                // onClick={loginHandler}
                                // disabled={loading}
                            >
                                Войти
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>,
        document.getElementById('portal1')
    )
}