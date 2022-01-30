import "../styles/log.css";

export default function Log() {
  function newEntry() {
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var amount = document.getElementById("amount").value;
    let newEntry = [];

    if ((date !== "", name !== "", amount !== "")) {
      let id = Math.floor(Math.random() * 100000);
      newEntry.push(id, date, name, amount);
      localStorage.setItem("log", JSON.stringify(newEntry));
    }
  }
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
            <div className="log-item" key={item}>
              <p>{item.date}</p>
              <p>{item.name}</p>
              <p>{item.amount}</p>
            </div>
          ))}
          <div className="log-item">
            <p>1/1/2022</p>
            <p>Expense</p>
            <p>$10.00</p>
            <span className="material-icons">close</span>
          </div>
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
