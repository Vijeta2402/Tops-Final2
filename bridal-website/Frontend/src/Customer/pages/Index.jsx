import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Custom Previous Arrow
const PrevArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <i className="fa fa-chevron-left custom-arrow" />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <i className="fa fa-chevron-right custom-arrow" />
  </div>
);


function Index() {

  return (
    <div>
      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <div className="banner-item-01">
            <div className="text-content">
              <h4>EXCLUSIVE BRIDAL DEAL</h4>
              <h2>STUNNING LOOKS FOR YOUR SPECIAL DAY</h2>
            </div>
          </div>
          <div className="banner-item-02">
            <div className="text-content">
              <h3 style={{ color: '#e72e77' }}>BRIDAL BEAUTY OFFER</h3>
              <h2>GET YOUR DREAM BRIDAL LOOK</h2>
            </div>
          </div>
          <div className="banner-item-03">
            <div className="text-content">
              <h4>LIMITED TIME GLAM</h4>
              <h2>BOOK YOUR BRIDAL LOOK TODAY</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Ends Here */}

      {/* Latest Products start Here */}

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading d-flex justify-content-between align-items-center ">
                <h2>Latest Makeup</h2>
                <a href="Makeup_details" className="text-pink">VIEW ALL PRODUCTS <i className="fa fa-angle-right"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_01.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i> Chennai</p>
                  <h6>₹12,000</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>

                    <span> 4.0(46 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_02.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i> Banglore</p>
                  <h6>₹11,000</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span> 4.8(56 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_03.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i>Kolkata</p>
                  <h6>₹13,000</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span> 4.9 (34 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_04.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i> Jaipur</p>
                  <h6>₹13,500</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span> 4.7 (74 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_05.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i>Chandigarh</p>
                  <h6>₹14,000</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span> 5.0 (114 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <span className="badge bg-pink">Handpicked</span>
                <img src="/assets/images/product_06.jpg" alt="" />
                <div className="down-content">
                  <h4>Bridal Makeup</h4>
                  <p><i className="fa fa-map-marker"></i> Pune</p>
                  <h6>₹15,000</h6>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <span> 4.9 (34 reviews)</span>
                  </div>
                  <div>
                    <span className="tag">Freelance Artist</span>
                    <span className="tag">Travels to venue</span>
                    <span className="tag">+5 more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Products Ends Here */}

      {/* Best features start her*/}
      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Our Bridal Beauty Services</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Looking for the perfect bridal makeover?</h4>
                <p>We specialize in creating elegant, timeless bridal looks tailored to your unique style and personality.
                 Whether it’s a traditional wedding or a modern ceremony, our team ensures you look radiant and confident on your special day. 
                 <a href='contact'>Contact Us</a></p>
                <ul className="featured-list">
                  <li><a href="#">HD & Airbrush Bridal Makeup</a></li>
                  <li><a href="#">Pre-Wedding Makeup Trials</a></li>
                  <li><a href="#">Engagement & Reception Looks</a></li>
                  <li><a href="#">Hair Styling & Draping</a></li>
                  <li><a href="#">Customized Packages for Every Budget</a></li>
                </ul>
                <a href="about" className="filled-button">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="assets/images/feature-image.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Best features end her*/}

      {/*image slider start here */}
      <div className="look-book">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>MY LOOK BOOK</h2>
              </div>
            </div>
          </div>
          <div className="image-slider-wrapper">
            <Slider
              slidesToShow={2}
              slidesToScroll={1}
              centerMode={false}
              infinite={true}
              autoplay={true}
              speed={2000}
              autoplaySpeed={4000}
              pauseOnHover={true}
              arrows={true}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >


              {/* Slider Images */}
              <div className="slider-image-container">
                <img src="/assets/images/slider_1.jpg" alt="Slider 1" className="slider-image" />
              </div>
              <div className="slider-image-container">
                <img src="/assets/images/slider_2.jpg" alt="Slider 2" className="slider-image" />
              </div>
              <div className="slider-image-container">
                <img src="/assets/images/slider_3.jpg" alt="Slider 3" className="slider-image" />
              </div>
              <div className="slider-image-container">
                <img src="/assets/images/slider_4.jpg" alt="Slider 4" className="slider-image" />
              </div>
              <div className="slider-image-container">
                <img src="/assets/images/slider_5.jpg" alt="Slider 5" className="slider-image" />
              </div>
              <div className="slider-image-container">
                <img src="/assets/images/slider_6.jpg" alt="Slider 6" className="slider-image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*image slider end here */}

      {/* contact footer start here */}
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





      {/* contact footer end here */}
    </div >

  )
}

export default Index
