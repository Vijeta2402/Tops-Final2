//Create a simple theme toggle (light/dark mode) using the Context API. The themestate should be shared across multiple components.

import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const values = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
