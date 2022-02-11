import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/home";
import Log from "./pages/log";

function App() {
  function closeMenu() {
    const nav = document.querySelector("nav");
    const navButton = document.getElementById("menu-btn");
    const navList = document.getElementById("menu-list");

    if (nav.classList.contains("menu-open")) {
      nav.classList.remove("menu-open");
      navList.classList.remove("list-open");
      navButton.innerHTML = "menu";
    }
  }
  return (
    <div className="App" onClick={closeMenu}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
