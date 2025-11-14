//Use the Context API to create a global user authentication system. If the user is logged in, display a welcome message; otherwise, prompt them to log in.


import React, { createContext, useState } from "react";

// CreateContext means Create a box
export const AuthContext = createContext();    //uthContext is just a name of the box, that we will use everywhere to access the authentication data.

// Provider Component
export const AuthProvider = ({ children }) => {   // AuthProvider is a component that will wrap around parts of the app that need access to authentication data.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Functions to update login status
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>           {/*<AuthContext.Provider> // put data into the Auth box*/}
      {children}                       {/* children are the components that will have access to the AuthContext data */}
    </AuthContext.Provider>
  );
};

