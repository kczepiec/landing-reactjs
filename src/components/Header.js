import React from 'react'
import './Header.css'
import Cover from'./../assets/cover.png'

function Header() {
    return (
        <header>
            <div className="wrapper d-flex">
            <div className="header-body">
                <h1>How to stand out at <span>the events</span></h1>
                <p className="lead">Success guide book</p>
                <a href="#register" className="btn">What’s inside</a>
            </div>
            <div className="magazine-cover">
                <img src={Cover} alt="magazine"/>
            </div>
            </div>
        </header>
    )
}

export default Header
