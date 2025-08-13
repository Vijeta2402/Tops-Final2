import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Create_react-router/Home";
import About from "./Create_react-router/About";
import Contact from "./Create_react-router/Contact";

function App2() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
