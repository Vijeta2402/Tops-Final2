import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';


 function Navbar() {
  /*  const [sticky, setSticky] = useState(false);

    useEffect(() => {
         window.addEventListener('scroll', () => {
              window.scrollY > 50 ? setSticky(true) : setSticky(false);
            })
    }, []);*/
    
    return(
        <nav className={`container  'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo'/>
            <ul type="none">
                <li>Home   </li> 
                <li> 
                Program</li>
                <li> About us
               </li>
                <li> 
                Campus</li>
                <li>   
                Testimonials</li>  
                <li> <button className='btn'>  
                Cantact us</button></li>
            </ul>    
        </nav>  
    )
 }
 export default Navbar  

 
 