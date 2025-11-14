import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeButton from "./ThemeButton";
import Box from "./Box";

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <ThemeButton />
        <Box />
      </div>
    </ThemeProvider>
  );
}

export default App;
