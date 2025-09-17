import React from 'react'

function AHeader() {
    return (
        <div>
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i className="fa fa-envelope" /> info@company.com</li>
                                <li><i className="fa fa-map" /> Sunny Isles Beach, FL 33160</li>
                                {(() => {
                                    if (localStorage.getItem('a_name')) {
                                        return (
                                            <li><i className="fa fa-user" />
                                                Welcome : {localStorage.getItem('a_name')}
                                            </li>
                                        )
                                    }
                                })()}

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
            <header className>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><h2>Wed <em>Me</em>Good</h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                   <NavLink to="/dashboard" >Dashboard</NavLink>
                                </li>
                                <li class="dropdown nav-item">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Categories</a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/add_categories">Add Categories</Link>
                                            <Link class="dropdown-item" to="/manage_categories">Manage Categories</Link>
                                        </div>
                                    </li>
                                <li class="dropdown nav-item">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Properties</a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/add_properties">Add Properties</Link>
                                            <Link class="dropdown-item" to="/manage_properties">Manage Properties</Link>
                                        </div>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to="/manage_customer">Customer</NavLink>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Booking Work</a>
                                    <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/manage_booking">Booking Reoprt</Link>
                                            <Link class="dropdown-item" to="/manage_feedback">Feedback</Link>
                                    </div>
                                </li>
                               {(() => {
                                        if (localStorage.getItem('a_email')) {
                                            return (
                                                <li><a href={void (0)} onClick={logout} className="w-100 h-50 p-1"> Logout</a></li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li><NavLink to="/admin_login" className="w-100 h-50 p-1"> <span className='fa fa-user'></span> Login</NavLink></li>
                                            )
                                        }
                                })()}                
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                
                            </ul>


                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default AHeader
