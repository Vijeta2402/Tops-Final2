import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Routing/pages/Index";
import Header from "./Routing/component/Header";
import Footer from "./Routing/component/Footer";
import Properties from "./Routing/pages/Properties";
import Properties_details from "./Routing/pages/Properties_details";
import Contact from "./Routing/pages/Contact";
import SignIn from "./Routing/pages/SignIn";
import SignUp from "./Routing/pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Footer/></>}></Route>
          <Route path="/properties" element={<> <Header/> <Properties/> <Footer/></>}></Route>
          <Route path="/property-details" element={<> <Header/> <Properties_details/> <Footer/></>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Footer/></>}></Route>
          <Route path="/Sign-In" element={<> <Header/> <SignIn/> <Footer/></>}></Route>
          <Route path="/Sign-Up" element={<> <Header/> <SignUp/> <Footer/></>}></Route>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;