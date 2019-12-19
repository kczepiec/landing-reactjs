import React from 'react'
import './Navbar.css'
import Logo from './../assets/logo-white.png';
import LogoDark from './../assets/logo-dark.png';

function Navbar() {

    window.onscroll = function changeClass(){
        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        const navbar = document.querySelector('.navbar');
        const link = document.querySelector('.link');
        if(scrollPosY > 100) {
            navbar.className = ('navbar bg-white');
            link.className = ('nav-link link hover');
        } else if(scrollPosY <= 100) {
            navbar.className = ('navbar');
            link.className = ('nav-link link');
        }
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo white"/>
            </div>
            <div className="nav">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#whatsinside" className="nav-link link">What's inside</a>
                    </li>
                    <li className="nav-item">
                        <a href="#register" className="nav-link btn">Register now</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
