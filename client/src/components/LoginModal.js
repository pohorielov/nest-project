import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from "react-dom";
import 'materialize-css/dist/css/materialize.min.css'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/auth.hook";
import bootstrap from 'bootstrap'
import {RegisterModal} from "./RegisterModal";
// import {FETCHED_USER} from "../redux/types";
// import {useDispatch} from "react-redux";

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

export function LoginModal({ open, children, onClose }) {
    const {login, logout, token, userId} = useAuth() //

    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    if (!open) return null


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
        {/*<>*/}
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
{/*///////////////////////////*/}




{/*                    //////////////////////////////////*/}
        {/*            <div className="row">*/}
        {/*                <h4>Авторизация</h4>*/}
        {/*                <div className="card-content white-text">*/}
        {/*                    <div>*/}

        {/*                        <div className="input-field">*/}
        {/*                            <input*/}
        {/*                                placeholder="Введите Email"*/}
        {/*                                id="email"*/}
        {/*                                type="text"*/}
        {/*                                name="email"*/}
        {/*                                value={form.email}*/}
        {/*                                onChange={changeHandler}*/}
        {/*                            />*/}
        {/*                            <label htmlFor="email">Email</label>*/}
        {/*                        </div>*/}

        {/*                        <div className="input-field">*/}
        {/*                            <input*/}
        {/*                                placeholder="Введите пароль"*/}
        {/*                                id="password"*/}
        {/*                                type="password"*/}
        {/*                                name="password"*/}
        {/*                                value={form.password}*/}
        {/*                                onChange={changeHandler}*/}
        {/*                                disabled={loading}*/}
        {/*                            />*/}
        {/*                            <label htmlFor="password">Пароль</label>*/}
        {/*                        </div>*/}

        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="card-action">*/}
        {/*                    <button*/}
        {/*                        className="btn yellow darken-4"*/}
        {/*                        // style={{marginRight: 10}}*/}
        {/*                        disabled={loading}*/}
        {/*                        onClick={loginHandler}*/}
        {/*                    >*/}
        {/*                        Войти*/}
        {/*                    </button>*/}

        {/*                    <div>*/}
        {/*                        <button*/}
        {/*                            onClick={() => setIsOpen(true)}*/}
        {/*                            className="btn modal-trigger"*/}
        {/*                            style={{marginRight: 10, marginTop: 10}}*/}
        {/*                        >*/}
        {/*                            Регистрация*/}
        {/*                        </button>*/}

        {/*                        <RegisterModal open={isOpen} onClose={() => setIsOpen(false)} />*/}
        {/*                    </div>*/}
        {/*                    /!*<button*!/*/}
        {/*                    /!*    style={{display: "flex", marginRight: 700}}*!/*/}
        {/*                    /!*    // className=""*!/*/}
        {/*                    /!*    // onClick={}*!/*/}
        {/*                    /!*    // disabled={loading}*!/*/}
        {/*                    /!*>*!/*/}
        {/*                    /!*    Регистрация*!/*/}
        {/*                    /!*</button>*!/*/}
        {/*                </div>*/}
        {/*            </div>*/}

                </div>
            </div>

            <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
                        </div>
                        <div className="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2"
                                    data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close">x</button>
                        </div>
                        <div className="modal-body">
                            Hide this modal and show the first with the button below.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle"
                                    data-bs-toggle="modal" data-bs-dismiss="modal">Back to first
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first*/}
            {/*    modal</a>*/}

        </AuthContext.Provider>,
        document.getElementById('portal2')
    )
}