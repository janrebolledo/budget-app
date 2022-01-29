import "../styles/Menu.css";

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
  return (
    <nav id="menu" className="menu">
      <span
        onClick={openMenu}
        id="menu-btn"
        className="material-icons menu-button"
      >
        menu
      </span>
      <ul id="menu-list">
        <a href="/">
          <li>Dashboard</li>
        </a>
        <a href="/log">
          <li>Log</li>
        </a>
      </ul>
    </nav>
  );
}
