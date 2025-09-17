import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
      <div>
           <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                             <h3>SignIn Us</h3>
                             <span className="breadcrumb"><a href="#">Home</a>  &gt; Sign In</span>
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
                                                                          <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                                                                      </fieldset>
                                                    </div>
                                                    <div className="col-lg-12">
                                                                 <Link to="/signup" className='float-end'>If you are not registered then Sign Up Here</Link>
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

export default SignIn


