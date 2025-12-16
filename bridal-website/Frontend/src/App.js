import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Customer/pages/Index'
import Header from './Customer/component/Header'
import Footer from './Customer/component/Footer'

import SignIn from './Customer/pages/SignIn'
import SignUp from './Customer/pages/SignUp'
import About from './Customer/pages/About'
import Contact from './Customer/pages/Contact'
import Makeup_details from './Customer/pages/Makeup_details'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User_Profile from "./Customer/pages/User_Profile"
import AHeader from './Admin/component/AHeader'
import AFooter from './Admin/component/AFooter'
import Dashboard from './Admin/pages/Dashboard'
import Add_categories from './Admin/pages/Add_categories'
import Manage_categories from './Admin/pages/Manage_categories'
import Add_properties from './Admin/pages/Add_properties'
import Manage_properties from './Admin/pages/Manage_properties'
import AdminLayout from './Admin/pages/AdminLayout'
import Services from './Customer/pages/Services'
import User_before_auth from './Customer/pages/User_before_auth'
import User_after_auth from './Customer/pages/User_after_auth'
import Edit_profile from './Customer/pages/Edit_profile'
import Admin_login from './Admin/pages/Admin_login'
import Admin_authantic from './Admin/pages/Admin_authantic'
import Manage_customer from './Admin/pages/Manage_customer'
import Manage_Booking from './Admin/pages/Manage_Booking'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer> </ToastContainer>
        <Routes>
          <Route path="/" element={<><Header /><Index /><Footer /></>}></Route>
         
          <Route path="/makeup-details/:id" element={<><Header /><Makeup_details /><Footer /></>}></Route>
          <Route path="services" element={<><Header /><Services /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>


          <Route element={<User_after_auth/>}>
            <Route path="/user_profile" element={<> <Header/> <User_Profile/> <Footer/></>}></Route>
            <Route path="/edit_profile/:id" element={<> <Header/> <Edit_profile/> <Footer/></>}></Route>
          </Route>

         
          

          <Route element={<User_before_auth/>}>
              <Route path="/Sign-In" element={<><Header /><SignIn /><Footer /></>}></Route>
              <Route path="/signup" element={<><Header /><SignUp /><Footer /></>}></Route>
          </Route>
  
          {/* Admin Routes */}
          <Route path="/admin_login" element={<>  <Admin_login/></>}></Route>  

          <Route element={<Admin_authantic/>}>
                <Route path="/dashboard" element={<><AHeader/><AdminLayout><Dashboard/></AdminLayout></>} />
                <Route path="/add_categories" element={<><AHeader/><AdminLayout><Add_categories /></AdminLayout></>} />
                <Route path="/manage_categories" element={<><AHeader/><AdminLayout><Manage_categories /></AdminLayout></>} />
                <Route path="/add_properties" element={<><AHeader/><AdminLayout><Add_properties /></AdminLayout></>} />
                <Route path="/manage_properties" element={<><AHeader/><AdminLayout><Manage_properties /></AdminLayout></>} /> 
                <Route path="/manage_customer" element={<><AHeader/><AdminLayout><Manage_customer /></AdminLayout></>} />
                <Route path="/manage_booking" element={<><AHeader/><AdminLayout><Manage_Booking/></AdminLayout></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;