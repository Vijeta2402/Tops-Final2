import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Routing/component/Header'
import Index from './Routing/pages/Index'
import Footer from './Routing/component/Footer'
import Shop from './Routing/pages/Shop'
import Product_details from './Routing/pages/Product_details'
import Contact from './Routing/pages/Contact'
import SignIn from './Routing/pages/SignIn'
import SignUp from './Routing/pages/SignUp'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Footer/></>}></Route>
          <Route path="/shop" element={<> <Header/> <Shop/> <Footer/></>}></Route>
          <Route path="/product-details" element={<> <Header/> <Product_details/> <Footer/></>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Footer/></>}></Route>
          <Route path="/signin" element={<> <Header/> <SignIn/> <Footer/></>}></Route>
          <Route path="/signup" element={<> <Header/> <SignUp/> <Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

