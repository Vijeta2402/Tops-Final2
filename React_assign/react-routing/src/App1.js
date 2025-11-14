
/*Set up a basic React Router with two routes: one for a Home page and one for an About page. Display the appropriate content based on the URL. */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function App1() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/about">About</Link>
        </nav> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
