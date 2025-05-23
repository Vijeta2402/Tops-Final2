import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero ()  {
  return (
    <div className='hero'>
        <div className="hero-text container">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students
              with the knowladge, skills, and experience needed to excel in 
              the dynamic field of education
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero
