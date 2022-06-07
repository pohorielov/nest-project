import React, {useContext} from "react"
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import FetchedUser from "../components/FetchedUser";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const NamePage = () => {

    const history = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/')
    }

    return (
        <>
            <Navbar/>
        <div className="container" style={{margin: 165}}>


            <button
                className="modal-close waves-effect waves-green btn-flat"
                style={{marginLeft: '100%', marginTop: -200, background: 'red', color: 'white'}}
                onClick={logoutHandler}
            >
                X
            </button>
            <FetchedUser />
        </div>
            <Footer/>
        </>
    )
}