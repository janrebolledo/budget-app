import "../styles/Settings.css";

export default function Settings() {
  // Toggle between visibility by adding class
  function openSettings() {
    const settingsModal = document.querySelector("#settings-modal");
    if (settingsModal.classList.contains("settings-modal-open")) {
      settingsModal.classList.remove("settings-modal-open");
    } else {
      settingsModal.classList.add("settings-modal-open");
    }
  }

  // Checks if the esc key is clicked to open the settings modal
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      openSettings();
    }
  });

  // Asks the user if they really want to clear the log
  function clearLog() {
    if (window.confirm("Are you sure you want to clear the log?")) {
      // Clear the log
      localStorage.removeItem("log");
      // Reload the window to have the changes take effect
      window.location.reload();
    }
  }

  function exportLog() {
    let jsonData = JSON.stringify(localStorage.getItem("log"));

    function download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    download(jsonData, "log.json", "application/json");
  }

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
          <p>Export log</p>
          <button onClick={exportLog}>Export to JSON</button>

          <h3 className="settings-heading">About</h3>
          <p>
            This project is built with vanilla javascript and hosted locally.
            This app is entirely local, no data will ever be sent to a server.
          </p>
          <p>
            Source code available{" "}
            <a
              className="link"
              href="https://github.com/janrebolledo/budget-app"
            >
              here
            </a>
            .
          </p>
          <p>
            Copyright © 2021{" "}
            <a className="link" href="https://janrebolledo.com">
              Jan Rebolledo
            </a>
            . Digital Experience by{" "}
            <a className="link" href="https://janrebolledo.com">
              Jan Rebolledo
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
