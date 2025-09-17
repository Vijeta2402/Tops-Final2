
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert';


function Contact() {


  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    message: ""
  })

  const changeHandel = (e) => {
    setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formdata);
  }
  function validation() {
    let ans = true;
    if (formdata.name == "") {
      toast.error('Name Field is required');
      ans = false;
    }
    if (formdata.email == "") {
      toast.error('Email Field is required');
      ans = false;
    }
    if (formdata.mobile == "") {
      toast.error('Mobile Field is required');
      ans = false;
    }
    if (formdata.message == "") {
      toast.error('Message Field is required');
      ans = false;
    }
    return ans;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/contact`, formdata);
      console.log(res);
      swal("Good job!", "Contact Submitted Success!", "success");
      setFormdata({ ...formdata, name: "", email: "", mobile: "", message: "" });
    }

  }

  return (
    <div>

      {/*-- Page Content --*/}

      <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h3>contact us</h3>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>About Our Studio</h4>
                <p>At our bridal makeup studio, we specialize in creating timeless, elegant looks for your special day. From soft glam to bold bridal beauty, our experienced artists are dedicated to enhancing your natural radiance.
                  Located in the heart of [Your City], our studio provides a relaxing environment where you can enjoy a personalized beauty experience. Let us be a part of your unforgettable journey.</p>
                <ul className="social-icons">
                  <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
                  <li><a href="https://apps.microsoft.com/detail/9wzdncrfj140?hl=en-us&gl=US"><i className="fa fa-twitter" /></a></li>
                  <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="send-message">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Send us a Message</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <form id="contact" action method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label htmlFor="name">Full Name</label>
                        <input type="name" onChange={changeHandel} value={formdata.name} name="name" id="name" placeholder="Your Name..." />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" onChange={changeHandel} value={formdata.email} name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <label htmlFor="subject">Mobile</label>
                        <input type="number" onChange={changeHandel} value={formdata.mobile} name="mobile" id="mobile" placeholder="Mobile..." />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" onChange={changeHandel} value={formdata.message} id="message" placeholder="Your Message" defaultValue={""} />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="happy-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Makeup Brands We Use</h2> {/* Updated heading */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-clients owl-carousel">
                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="Brand 1" />
                </div>
                <div className="client-item">
                  <img src="assets/images/client-02.png" alt="Brand 2" />
                </div>
                <div className="client-item">
                  <img src="assets/images/client-03.png" alt="Brand 3" />
                </div>
                <div className="client-item">
                  <img src="assets/images/client-04.png" alt="Brand 4" />
                </div>
                <div className="client-item">
                  <img src="assets/images/client-05.png" alt="Brand 5" />
                </div>
                <div className="client-item">
                  <img src="assets/images/client-06.png" alt="Brand 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="contact-footer">
        <div className="footer-socials">
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-instagram" /></a>
          <a href="#"><i className="fa fa-pinterest-p" /></a>
          <a href="#"><i className="fa fa-youtube-play" /></a>
        </div>

        <div className="footer-content container">
          {/* Contact Info */}
          <div className="footer-section">
            <h3>CONTACT INFO</h3>
            <p><i className="fa fa-clock-o" /> Mon - Sun 11:00 AM - 7:00 PM</p>
            <p><i className="fa fa-phone" /> 88269 63239</p>
            <p><i className="fa fa-map-marker" /> B-21, Shivalik Rd, Block B, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017</p>
            <p><i className="fa fa-envelope" /> <a href="mailto:info@meenakshiduttmakeovers.com">info@meenakshiduttmakeovers.com</a></p>
          </div>

          {/* About Us */}
          <div className="footer-section">
            <h3>ABOUT US</h3>
            <p>
              Start your makeup journey today as MDM is providing a platform for all to grow as professional makeup artists.
            </p>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>SERVICES</h3>
            <div>
              <a href='#'>BRIDAL MAKEUP PACKAGES</a>
              <a href='#'>ENGAGEMENT MAKEUP PACKAGES</a>
              <a href='#'>PARTY MAKEUP PACKAGES</a>
              <a href='#'>TERMS & CONDITION</a>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Contact
