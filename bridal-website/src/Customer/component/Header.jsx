import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css' // Assuming you have a CSS file for styling
function Header() {
    return (
        <div>

            <header className>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <img src="/assets/images/logo.png" style={{ height: '60px', margin: "6px" }} />

                        <a class="navbar-brand" ><p>Wed<b>Me</b> Good</p></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link"><NavLink to="/" ></NavLink>Home
                                      
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/gallery" className="nav-link">
                                        Gallery
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/booking" className="nav-link">
                                        Booking
                                    </NavLink>

                                </li>
                            
                                <li class="nav-item">
                                    <a className="nav-link">Services</a>
                                    {/* Hover Mega Menu */}
                                    <div className="mega-menu">
                                        <div className="mega-column">
                                            <h4>Makeup Types</h4>
                                            <NavLink to="/bridal-makeup">Bridal Makeup</NavLink>
                                            <NavLink to="/party-makeup">Party Makeup</NavLink>
                                            <NavLink to="/hd-makeup">HD Makeup</NavLink>
                                        </div>
                                        <div className="mega-column">
                                            <h4>Destination</h4>
                                            <NavLink to="/goa">Goa</NavLink>
                                            <NavLink to="/udaipur">Udaipur</NavLink>
                                            <NavLink to="/jaipur">Jaipur</NavLink>
                                        </div>
                                        <div className="mega-column">
                                            <h4>Featured</h4>
                                            <img src="/assets/images/bridal1.jpg" alt="Bridal" className="mega-img" />
                                            <img src="/assets/images/bridal2.jpg" alt="Makeup" className="mega-img" />
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">
                                        About Us
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link">
                                        ContactUs
                                    </NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">
                                        SignUp
                                    </NavLink>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Header
