import "../styles/log.css";
import CurrencyInput from "react-currency-input-field";
import { useEffect } from "react";
import { LocalDate } from "@js-joda/core";
import Filters from "../components/Filters";

export default function Log() {
  function newEntry() {
    var name = document
      .getElementById("name")
      .value.replace("<", "")
      .replace(">", "");
    var amount = document.getElementById("amount").value;
    var amountInt = Number(
      document.getElementById("amount").value.replace("$", "").replace(/,/g, "")
    );
    // Gets date values for insights
    var day = LocalDate.parse(
      document.getElementById("date").value
    ).dayOfMonth();
    var week = LocalDate.parse(
      document.getElementById("date").value
    ).isoWeekOfWeekyear();
    var month = LocalDate.parse(
      document.getElementById("date").value
    ).monthValue();
    var year = LocalDate.parse(document.getElementById("date").value).year();
    var hashCode = LocalDate.parse(
      document.getElementById("date").value
    ).hashCode();
    var date = month + "/" + day + "/" + year;
    // Get log in localStorage
    let log = JSON.parse(localStorage.getItem("log") || "[]");
    // Set newEntry as a blank array
    let newEntry = [];

    // Check if all inputs are filled
    if ((date !== "", name !== "", amount !== "")) {
      // Set id as random number
      let id = Math.floor(Math.random() * 100000);
      // Create new entry
      newEntry.push({
        id,
        date,
        name,
        amount,
        amountInt,
        day,
        week,
        month,
        year,
        hashCode,
      });
      // Add newEntry to current log
      let updatedLog = log.concat(newEntry);
      // Set updatedLog as localStorage
      localStorage.setItem("log", JSON.stringify(updatedLog));
      logItems();
      refreshTotal();
    }

    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
  }

  function refreshTotal() {
    const totalHTML = document.getElementById("total");
    let log = JSON.parse(localStorage.getItem("log") || "[]");

    // Get amounts in an array as integers
    let result = log.map(({ amountInt }) => amountInt);

    // Add amounts together
    let total = 0;

    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }

    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    // If total > 0 set it as text for html, else set it to 0
    if (total > 0) {
      totalHTML.innerHTML = formattedTotal;
    } else {
      totalHTML.innerHTML = "$0.00";
    }
  }

  function logItems() {
    if (sessionStorage.getItem("filter") === null) {
      var log = JSON.parse(localStorage.getItem("log") || "[]");
    }

    if (sessionStorage.getItem("filter") === "weekly") {
      // eslint-disable-next-line
      var log = JSON.parse(localStorage.getItem("log") || "[]");

      var weekNum = LocalDate.now().isoWeekOfWeekyear();
      var yearNum = LocalDate.now().year();

      log = log.filter((item) => {
        return item.week === weekNum;
      });

      log = log.filter((item) => {
        return item.year === yearNum;
      });
    }

    if (sessionStorage.getItem("filter") === "monthly") {
      // eslint-disable-next-line
      var log = JSON.parse(localStorage.getItem("log") || "[]");

      var monthNum = LocalDate.now().monthValue();
      // eslint-disable-next-line
      var yearNum = LocalDate.now().year();

      log = log.filter((item) => {
        return item.month === monthNum;
      });

      log = log.filter((item) => {
        return item.year === yearNum;
      });
    }

    if (sessionStorage.getItem("filter") === "annual") {
      // eslint-disable-next-line
      var log = JSON.parse(localStorage.getItem("log") || "[]");

      // eslint-disable-next-line
      var yearNum = LocalDate.now().year();

      log = log.filter((item) => {
        return item.year === yearNum;
      });
    }

    const logContainer = document.getElementById("log");

    // Clears container
    logContainer.innerHTML = "";

    // Prints an item for every object
    logContainer.innerHTML = log
      .map(
        (item) =>
          `<div class="log-item" key=${item.id} id=${item.id}>
        <p>${item.date}</p>
        <p>${item.name}</p>
        <p>${item.amount}</p>
        <span class="material-icons delete-button" id=${item.id}>delete</span>
      </div>
      `
      )
      .join("");

    deleteButtons();

    // If log is empty, give a message to add first log item

    if (logContainer.innerHTML === "") {
      logContainer.innerHTML = `
      <div class="log-item"><h3>Add an item below to get started.</h3></div>
      `;
    }
  }

  // Creates an event listener for delete buttons to trigger deleteItem when clicked
  function deleteButtons() {
    const deleteButton = document.querySelectorAll(".delete-button");

    deleteButton.forEach((button) => {
      button.addEventListener("click", (e) => {
        deleteItem(e);
      });
    });
  }

  function deleteItem(e) {
    const removeId = parseInt(e.target.id);

    let log = JSON.parse(localStorage.getItem("log") || "[]");

    // Filters the list by id
    var updatedLog = log.filter((item) => {
      return item.id !== removeId;
    });

    // Sets the localStorage as the updated log
    localStorage.setItem("log", JSON.stringify(updatedLog));

    // Refreshes UI
    logItems();
    refreshTotal();
  }

  function openFilters() {
    const filtersModal = document.querySelector("#filters-modal");
    if (filtersModal.classList.contains("filters-modal-open")) {
      filtersModal.classList.remove("filters-modal-open");
    } else {
      filtersModal.classList.add("filters-modal-open");
    }
  }

  // Prints items + calculates total on load
  useEffect(() => {
    logItems();
    refreshTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <h2 className="log-heading">Expenses Log</h2>
      <div className="log-container">
        <div className="log-header">
          <h4>Date</h4>
          <h4>Name</h4>
          <h4>Amount</h4>
          <h5 className="filters-button" onClick={openFilters}>
            Filters{" "}
            <span
              id="filters-dropdown-button"
              className="material-icons"
              onClick={openFilters}
            >
              search
            </span>
          </h5>
        </div>
        <div className="log" id="log"></div>
        <div className="log-footer">
          <p>Add new expense</p>
          <p>
            Total: <b id="total"></b>
          </p>
        </div>
      </div>
      <div className="new-entry-form">
        <input id="date" type="date" required placeholder="1/1/2022" />
        <input id="name" type="text" required placeholder="Expense" />
        <CurrencyInput
          required
          id="amount"
          placeholder="$00.00"
          prefix="$"
          decimalsLimit={2}
          intlConfig={{ locale: "en-US", currency: "USD" }}
        />
        <button type="submit" onClick={newEntry}>
          Add
        </button>
      </div>
      <Filters />
    </main>
  );
}
