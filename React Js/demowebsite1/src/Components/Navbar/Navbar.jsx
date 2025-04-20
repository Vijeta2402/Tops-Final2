import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';


 function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
         window.addEventListener('scroll', () => {
              window.scrollY > 50 ? setSticky(true) : setSticky(false);
            })
    }, []);
    
    return(
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo'/>
            <ul type="none">
                <li> <link to='hero' smooth={true} offset={0} duration={500}>Home   
                </link></li> 
                <li> <link to='Program' smooth={true} offset={0} duration={500}>
                Program</link></li>
                <li> <link to='about' smooth={true} offset={0} duration={500}>About us
                </link></li>
                <li><link to='campus' smooth={true} offset={0} duration={500}>  
                Campus</link></li>
                <li><link to='testimonials' smooth={true} offset={0} duration={500}>   
                Testimonials</link></li>  
                <li> <link to='contact' smooth={true} offset={0} duration={500} className='btn'>  
                Cantact us</link></li>
            </ul>    
        </nav>  
    )
 }
 export default Navbar  

 
 