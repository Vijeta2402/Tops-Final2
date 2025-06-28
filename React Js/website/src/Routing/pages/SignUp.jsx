import React from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
    return (

        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <span className="breadcrumb"><a href="#">Home</a>  &gt; Sign Up</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-page section">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-lg-10 ">
                            <div className="right-content">
                                <div className="row">
                                    
                                    <div className="col-lg-8 offset-lg-3">
                                        <form id="contact-form" action method="post">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <input type="surname" name="surname" id="surname" placeholder="Your Surname..." autoComplete="on" required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                               <Link to="/signin" className='float-end'>If you already registered then Sign In Here</Link>
                                               </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SignUp
