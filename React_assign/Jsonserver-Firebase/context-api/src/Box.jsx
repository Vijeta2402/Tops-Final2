import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Box() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "8px",
        background: theme === "light" ? "#f2f2f2" : "#333",
        color: theme === "light" ? "#111" : "#eee",
      }}
    >
      Current Theme: {theme.toUpperCase()}
    </div>
  );
}

export default Box;
