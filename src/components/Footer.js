import React from 'react'
import './Footer.css'
import LogoDark from './../assets/logo-dark.png';

function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <img src={LogoDark}/>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                Copyright 2019 - Smart-Digital.co.uk - All rights reserved.
                </div>
                <ul className="footer-nav">
                    <div className="nav-item">
                        <a href="#" className="nav-link">Terms</a>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
