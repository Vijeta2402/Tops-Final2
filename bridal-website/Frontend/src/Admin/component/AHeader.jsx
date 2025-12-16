import React from 'react'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function AHeader() {

    const redirect = useNavigate();
    const logout = () => {
        localStorage.removeItem('a_name');
        localStorage.removeItem('a_email');
        swal("Good job!", "Admin Logout Success!", "success");
        redirect('/admin_login');
    }

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
                                
                                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Header Area Start ***** */}
        </div>
    )
}

export default AHeader
