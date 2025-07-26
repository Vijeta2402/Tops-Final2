import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function AHeader() {
    return (
        <div>
            {/* ***** Preloader Start ***** */}
            
            {/* ***** Preloader End ***** */}
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i className="fa fa-envelope" /> info@company.com</li>
                                <li><i className="fa fa-map" /> Sunny Isles Beach, FL 33160</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className="social-links">
                                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    <h1>Villa</h1>
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Categories</a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/add_categories">Add Categories</Link>
                                            <Link class="dropdown-item" to="/manage_categories">Manage Categories</Link>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Properties</a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/add_properties">Add Properties</Link>
                                            <Link class="dropdown-item" to="/manage_properties">Manage Properties</Link>
                                        </div>
                                    </li>
                                    <li><NavLink to="/property-details">Customer</NavLink></li>
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Booking Work</a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="#">Booking Reoprt</Link>
                                            <Link class="dropdown-item" to="#">Feedback</Link>
                                        </div>
                                    </li>
                                    <li><NavLink to="/admin-login" className="w-100 h-50 p-1"> <span className='fa fa-user'></span> Logout</NavLink></li>
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

    )
}

export default AHeader