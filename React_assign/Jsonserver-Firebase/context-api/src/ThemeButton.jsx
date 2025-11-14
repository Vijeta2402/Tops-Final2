import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
        background: theme === "light" ? "#222" : "#fff",
        color: theme === "light" ? "#fff" : "#222",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeButton;
