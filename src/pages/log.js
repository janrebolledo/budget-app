import "../styles/log.css";

export default function Log() {
  function newEntry() {
    var date = document.getElementById("date").value.replace(/-/g, "/");
    var name = document.getElementById("name").value;
    var amount = document
      .getElementById("amount")
      .value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    // Get log in localStorage
    let log = JSON.parse(localStorage.getItem("log") || "[]");
    // Set newEntry as a blank array
    let newEntry = [];

    // Check if all inputs are filled
    if ((date !== "", name !== "", amount !== "")) {
      // Set id as random number
      let id = Math.floor(Math.random() * 100000);
      // Create new entry
      newEntry.push({ id, date, name, amount });
      // Add newEntry to current log
      let updatedLog = log.concat(newEntry);
      // Set updatedLog as localStorage
      localStorage.setItem("log", JSON.stringify(updatedLog));
    }
  }
  function deleteItem(event) {
    // Get id of item by getting id of button
    const removeId = event.target.id;
    console.log(removeId);

    // Get log from localStorage
    // let log = JSON.parse(localStorage.getItem("log") || "[]");

    // To-do: remove item from localstorage
  }

  // TO-DO
  // Refresh map on new entry
  let log = JSON.parse(localStorage.getItem("log") || "[]");
  return (
    <main>
      <h2>Log</h2>
      <div className="log-container">
        <div className="log-header">
          <h4>Date</h4>
          <h4>Name</h4>
          <h4>Amount</h4>
        </div>
        <div className="log" id="log">
          {log.map((item) => (
            <div className="log-item" key={item.id} id={item.id}>
              <p>{item.date}</p>
              <p>{item.name}</p>
              <p>${item.amount}</p>
              <span
                className="material-icons"
                id={item.id}
                onClick={deleteItem}
              >
                close
              </span>
            </div>
          ))}
        </div>
        <p className="log-total">
          Total: <b>$10.00</b>
        </p>
      </div>
      <div className="new-entry-form">
        <input id="date" type="date" required placeholder="1/1/2022" />
        <input id="name" type="text" required placeholder="Expense" />
        <input id="amount" type="number" required placeholder="$00.00" />
        <button type="submit" onClick={newEntry}>
          Add
        </button>
      </div>
    </main>
  );
}
