import "../styles/Menu.css";
import Settings from "./SettingsMenu";
import { Link } from "react-router-dom";

export default function Menu() {
  function openMenu() {
    const nav = document.querySelector("nav");
    const navButton = document.getElementById("menu-btn");
    const navList = document.getElementById("menu-list");

    if (nav.classList.contains("menu-open")) {
      nav.classList.remove("menu-open");
      navList.classList.remove("list-open");
      navButton.innerHTML = "menu";
    } else {
      nav.classList.add("menu-open");
      navList.classList.add("list-open");
      navButton.innerHTML = "close";
    }
  }
  function openSettings() {
    const settingsModal = document.querySelector("#settings-modal");
    if (settingsModal.classList.contains("settings-modal-open")) {
      settingsModal.classList.remove("settings-modal-open");
    } else {
      settingsModal.classList.add("settings-modal-open");
    }
  }

  // Checks if the m key is clicked to open the menu
  document.addEventListener("keyup", (e) => {
    if (e.key === "m") {
      openMenu();
    }
  });
  return (
    <>
      <nav id="menu" className="menu">
        <div>
          <span
            onClick={openMenu}
            id="menu-btn"
            className="material-icons menu-button"
          >
            menu
          </span>
          <ul id="menu-list" onClick={openMenu}>
            <Link to="/home">
              <li>Dashboard</li>
            </Link>
            <Link to="/log">
              <li>Log</li>
            </Link>
          </ul>
        </div>
        <span className="material-icons settings-button" onClick={openSettings}>
          settings
        </span>
      </nav>
      <Settings />
    </>
  );
}
