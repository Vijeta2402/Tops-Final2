import React, { useState } from "react";
import { auth, googleProvider } from "./Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Enter Email & Password!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password.trim());
      alert("Signup Success ✅");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Enter Email & Password!");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      alert("Login Success ✅");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Firebase Authentication</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn signup" onClick={signUp}>Sign Up</button>
      <button className="btn login" onClick={login}>Login</button>
      <button className="btn google" onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;


