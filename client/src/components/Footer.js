import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer</h5>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <p>{new Date().toDateString()}</p>
                </div>
                <a className="grey-text text-lighten-4 right" target='_blank' href="https://github.com/pohorielov">by Ihor Pohorielov</a>
            </div>
        </footer>
    )
}