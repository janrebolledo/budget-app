import "../styles/Settings.css";

export default function Settings() {
  function openSettings() {
    const settingsModal = document.querySelector("#settings-modal");
    if (settingsModal.classList.contains("settings-modal-open")) {
      settingsModal.classList.remove("settings-modal-open");
    } else {
      settingsModal.classList.add("settings-modal-open");
    }
  }
  function clearLog() {
    if (window.confirm("Are you sure you want to clear the log?")) {
      localStorage.removeItem("log");
      window.location.reload();
    }
  }

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      openSettings();
    }
  });
  return (
    <div className="settings-modal" id="settings-modal">
      <div className="settings">
        <div className="settings-header">
          <h2>Settings</h2>
          <span
            className="material-icons settings-close-button"
            onClick={openSettings}
          >
            close
          </span>
        </div>
        <div className="settings-content">
          <p>Clear log</p>
          <button onClick={clearLog}>Clear</button>
        </div>
      </div>
    </div>
  );
}
