import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Customer/pages/Index'
import Header from './Customer/component/Header'
import Footer from './Customer/component/Footer'
import Gallery from './Customer/pages/Gallery'
import SignIn from './Customer/pages/SignIn'
import SignUp from './Customer/pages/SignUp'
import About from './Customer/pages/About'
import Contact from './Customer/pages/Contact'
import Party_meckup from './Customer/pages/Party_meckup'
import Udaipur from './Customer/pages/Udaipur'
import Jaipur from './Customer/pages/Jaipur'
import Goa from './Customer/pages/Goa'
import Hd_meckup from './Customer/pages/Hd_meckup'
import Bridal_meckup from './Customer/pages/Bridal_meckup'
import MakeupArtistsList from './Customer/pages/MakeupArtistsList'
import Book_service from './Customer/pages/Book_service'
import View_booking from './Customer/pages/View_booking'





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
          <Route path="/gallery" element={<><Header/><Gallery/><Footer/></>}></Route>
          <Route path="/hd-makeup" element={<><Header/><Hd_meckup/><Footer/></>}></Route>
          <Route path="/makeup-artists" element={<><Header/><MakeupArtistsList/><Footer/></>}></Route>
          <Route path="/bridal-makeup" element={<><Header/><Bridal_meckup/><Footer/></>}></Route>
          <Route path="/party-makeup" element={<><Header/><Party_meckup/><Footer/></>}></Route>
          <Route path="/goa" element={<><Header/><Goa/><Footer/></>}></Route>
          <Route path="/udaipur" element={<><Header/><Udaipur/><Footer/></>}></Route>
          <Route path="/jaipur" element={<><Header/><Jaipur/><Footer/></>}></Route>
          <Route path="book-service" element={<><Header/><Book_service/><Footer/></>}></Route>
          <Route path="/view-bookings" element={<><Header/><View_booking/><Footer/></>}></Route>

          <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
          <Route path="/signin" element={<><Header/><SignIn/><Footer/></>}></Route>
          <Route path="/signup" element={<><Header/><SignUp/><Footer/></>}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
