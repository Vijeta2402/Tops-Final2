import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import swal from 'sweetalert';

function Header() {

    const redirect = useNavigate();
    const logout = () => {
        localStorage.removeItem('u_id');
        localStorage.removeItem('u_name');
        localStorage.removeItem('u_email');
        swal("Good job!", "Logout Success!", "success");
        redirect('/');
    }
    return (
        <div>
            {/* ***** Preloader Start ***** */}



            {/* ***** Preloader End ***** */}
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i className="fa fa-envelope" /> contact@wedmegorgeous.in</li>
                                <li><i className="fa fa-map" /> Lucknow, Uttar Pradesh</li>

                                {(() => {
                                    if (localStorage.getItem('u_name')) {
                                        return (

                                            <li><i className="fa fa-user" />
                                                Welcome : {localStorage.getItem('u_name')}
                                            </li>

                                        )
                                    }
                                })()}


                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className="social-links">
                                <li><Link to="/user_profile"><i className="fa fa-user" /> </Link></li>
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
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services" className="nav-link">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/makeup-details" className="nav-link">MakeUp Details</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">About Us</NavLink>
                                </li>
                                <li className='nav-item'>
                                   <NavLink to="/order" className="nav-link">Order</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                                </li>
                                {(() => {
                                        if (localStorage.getItem('u_id')) {
                                            return (
                                            <li className="nav-item">
                                                <a href="" onClick={logout} className="w-100 h-50 p-1 nav-link"> Logout</a>
                                            </li>
                                            )
                                        }
                                        else
                                        {
                                            return(
                                            <li className="nav-item">
                                               <NavLink to="/Sign-In" className="nav-link"> 
                                               <span className='fa fa-user'></span> Login
                                               </NavLink>
                                            </li>
                                            )
                                        }
                                })()}
                            </ul>

                           
                        </div>
                    </div>
                </nav>
            </header>
            {/* ***** Header Area End ***** */}
        </div>

    )
}

export default Header





/*
import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div>
            <header className>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><h2>Wed <em>Me</em>Good</h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="products.html">Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            {/* <header className="">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="navbar-brand d-flex align-items-center left:0">
                            <img src="/assets/images/logo.png" style={{ height: '60px',display:'fix' }} />
                            <p>Wed<b>Me</b> Good</p>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item mega-parent photos-parent">
                                    <input type="checkbox" id="photos-toggle-checkbox" className="d-none" />
                                    <label htmlFor="photos-toggle-checkbox" className="nav-link">Photos</label>

                                    <div className="mega-menu photos-menu">
                                       <div className="mega-column">
                                            <h4>Jewellery & Accessories</h4>
                                            <NavLink to="/bridal-jewellery">Bridal Jewellery</NavLink>
                                            <NavLink to="/engagement-rings">Engagement Rings</NavLink>
                                            <NavLink to="/floral-jewellery">Floral Jewellery</NavLink>
                                            
                                        </div>

                                        <div className="mega-column">
                                            <h4>Outfit</h4>
                                            <NavLink to="/bridal-lehenga">Bridal Lehenga</NavLink>
                                            <NavLink to="/wedding-sarees">Wedding Sarees</NavLink>
                                            <NavLink to="/engagement-outfits">Engagement</NavLink>
                                            <NavLink to="/mehndi-outfits">Mehndi</NavLink>
                                            
                                        </div>

                                        <div className="mega-column">   
                                            <h4>Hair</h4>
                                            <NavLink to="/bridal-hairstyles">Bridal Hairstyles</NavLink>
                                            <NavLink to="/hair-engagement">Engagement</NavLink>
                                            <NavLink to="/hair-mehndi">Mehndi</NavLink>
                                            <NavLink to="/hair-more">More</NavLink>
                                        </div>

                                        <div className="mega-column">
                                            <h4>Mehndi</h4>
                                            <NavLink to="/mehndi-arabic">Arabic</NavLink>
                                            <NavLink to="/mehndi-designs">Mehndi Designs</NavLink>
                                            <NavLink to="/mehndi-simple">Simple</NavLink>
                                            <NavLink to="/mehndi-unique">Unique</NavLink>
                                            <NavLink to="/mehndi-more">More</NavLink>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item mega-parent booking-parent">
                                    <a className="nav-link">Booking</a>
                                    <ul className="mega-menu booking-menu">
                                        <li><h4>Actions</h4></li>
                                        <li><NavLink to="/book-service">Book Service</NavLink></li>
                                        <li><NavLink to="/view-bookings">View Bookings</NavLink></li>
                                    </ul>
                                </li>


                                <li className="nav-item mega-parent">
                                    <a className="nav-link">Services</a>
                                    <div className="mega-menu">               */
{/* Makeup Types Column */ }
{/*  <div className="mega-column">
                                            <h4 className="destination-heading">Makeup Types</h4>
                                            <ul className="makeup-list">
                                                <li><NavLink to="/bridal-makeup">Bridal Makeup</NavLink></li>
                                                <li><NavLink to="/party-makeup">Party Makeup</NavLink></li>
                                                <li><NavLink to="/hd-makeup">HD Makeup</NavLink></li>
                                                <li><NavLink to="/makeup-artists">Makeup Artists List</NavLink></li>
                                            </ul>
                                        </div>

                                        {/* Destination Column */}
{/*                          <div className="mega-column">
                                            <h4 className="destination-heading">Destination</h4>
                                            <div className="destination-container">
                                                <NavLink to="/goa" className="destination-link">
                                                    <img src="/assets/images/goa_city.jpg" alt="Goa" className="destination-img" />
                                                    Goa
                                                </NavLink>

                                                <NavLink to="/udaipur" className="destination-link">
                                                    <img src="/assets/images/Udaipur_city.jpg" alt="Udaipur" className="destination-img" />
                                                    Udaipur
                                                </NavLink>

                                                <NavLink to="/jaipur" className="destination-link">
                                                    <img src="/assets/images/Jaipur_city.jpg" alt="Jaipur" className="destination-img" />
                                                    Jaipur
                                                </NavLink>
                                            </div>
                                        </div>                  */}

{/* Featured Column */ }
{/*                     <div className="mega-column">
                                            <h4 className="destination-heading">Featured</h4>
                                            <div className="featured-container">
                                                <img src="/assets/images/bridal1.jpg" alt="Featured1" className="featured-img" />
                                                <img src="/assets/images/bridal2.jpg" alt="Featured2" className="featured-img" />
                                            </div>
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
            </header>          */}
{/*</div >
    )
}

export default Header*/}
