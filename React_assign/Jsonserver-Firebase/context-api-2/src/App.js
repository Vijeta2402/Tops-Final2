import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  return (
    <div className="container mt-4">
      {isLoggedIn ? (
        <>
          <h3>Welcome, {email || "User"} 🎉</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
