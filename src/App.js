import { createContext, useState } from "react";
import Router from "./shared/Router";
import "./App.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "dark" ? "Dark Mode" : "Lgiht Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
        <Router />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
