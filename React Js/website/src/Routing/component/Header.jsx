
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/*-- ***** Preloader Start ***** --*/}
            {/*<div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot" />
                    <div className="dots">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>*/}
            {/* ***** Preloader End ***** */}

            {/*-- ***** Header Area Start---------*/}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" alt style={{ width: 158 }} />
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><NavLink to="/" >Home</NavLink></li>
                                    <li><NavLink to="/shop">Our Shop</NavLink></li>
                                    <li><NavLink to="/product-details">Product Details</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}
        </div>

    );
}

export default Header
