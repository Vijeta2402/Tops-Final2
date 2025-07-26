import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Admin_login() {
    return (
        <div>
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

                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ***** Header Area End ***** */}


                <div className="page-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="breadcrumb"><a href="#">Admin</a> / Login Us</span>
                                <h3>Admin Login</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-4">
                                <div className="section-heading text-center">
                                    <h6>Admin | Login Us</h6>
                                    <h2>Get In Touch With Our Agents</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 offset-lg-2">
                                <form id="contact-form" action method="post">
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="email">Email Address</label>
                                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <label htmlFor="name">Password</label>
                                                <input type="password" name="password" id="name" placeholder="Your Password..." autoComplete="on" required />
                                            </fieldset>
                                        </div>

                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="orange-button">Login</button>
                                            </fieldset>

                                        </div>
                                      
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div >
    
  )
}

export default Admin_login