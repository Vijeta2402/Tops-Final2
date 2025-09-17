import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Customer/pages/Index'
import Header from './Customer/component/Header'
import Footer from './Customer/component/Footer'
import Makeup_List from './Customer/pages/Makeup_List'
import SignIn from './Customer/pages/SignIn'
import SignUp from './Customer/pages/SignUp'
import About from './Customer/pages/About'
import Contact from './Customer/pages/Contact'
import Makeup_details from './Customer/pages/Makeup_details'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User_Profile from "./Customer/pages/User_Profile";




function App() {
  return (
    <div>
      <BrowserRouter>
              <ToastContainer> </ToastContainer>
        <Routes>
          <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
          {/*<Route path="/gallery" element={<><Header/><Gallery/><Footer/></>}></Route>*/}
          {/*<Route path="/hd-makeup" element={<><Header/><Hd_meckup/><Footer/></>}></Route>*/}
          {/*<Route path="/makeup-artists" element={<><Header/><MakeupArtistsList/><Footer/></>}></Route>*/}
          {/*<Route path="/bridal-makeup" element={<><Header/><Bridal_meckup/><Footer/></>}></Route>*/}
          {/*<Route path="/party-makeup" element={<><Header/><Party_meckup/><Footer/></>}></Route>*/}
          {/*<Route path="/goa" element={<><Header/><Goa/><Footer/></>}></Route>*/}
          <Route path="/makeup-details" element={<><Header/><Makeup_details/><Footer/></>}></Route>
          <Route path="/makeup_List" element={<><Header/><Makeup_List/><Footer/></>}></Route> 
          {/*<Route path="/udaipur" element={<><Header/><Udaipur/><Footer/></>}></Route>*/}
          {/*<Route path="/jaipur" element={<><Header/><Jaipur/><Footer/></>}></Route>*/}
          {/*<Route path="/udaipur" element={<><Header/><Udaipur/><Footer/></>}></Route>*/}
          {/*<Route path="/goa" element={<><Header/><Goa/><Footer/></>}></Route>*/}
          {/*<Route path="/udaipur" element={<><Header/><Udaipur/><Footer/></>}></Route>*/}
          {/*<Route path="/jaipur" element={<><Header/><Jaipur/><Footer/></>}></Route>
          <Route path="book-service" element={<><Header/><Book_service/><Footer/></>}></Route>
          <Route path="/view-bookings" element={<><Header/><View_booking/><Footer/></>}></Route>*/}
          <Route path="user_profile" element={<><Header/><User_Profile/><Footer/></>}></Route>
          <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/Sign-In" element={<><Header/><SignIn/><Footer/></>}></Route>
          <Route path="/signup" element={<><Header/><SignUp/><Footer/></>}></Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
