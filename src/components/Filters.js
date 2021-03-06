import "../styles/Filters.css";
import { useEffect } from "react";

export default function Filters() {
  function openFilters() {
    const filtersModal = document.querySelector("#filters-modal");
    if (filtersModal.classList.contains("filters-modal-open")) {
      filtersModal.classList.remove("filters-modal-open");
    } else {
      filtersModal.classList.add("filters-modal-open");
    }
  }

  function filters() {
    const userFilter = localStorage.getItem("filter");

    const dateDescendingButton = document.getElementById("date-descending");
    const dateAscendingButton = document.getElementById("date-ascending");
    const priceDescendingButton = document.getElementById("price-descending");
    const priceAscendingButton = document.getElementById("price-ascending");

    // If no filter is found in localStorage, set it as dateDecending
    if (userFilter === null) {
      localStorage.setItem("filter", "dateDescending");
      dateDescendingButton.checked = true;
    }
    if (userFilter === "dateDescending") {
      filterDateDescending();
      dateDescendingButton.checked = true;
    }

    if (userFilter === "dateAscending") {
      filterDateAscending();
      dateAscendingButton.checked = true;
    }

    if (userFilter === "priceDescending") {
      filterPriceDescending();
      priceDescendingButton.checked = true;
    }

    if (userFilter === "priceAscending") {
      filterPriceAscending();
      priceAscendingButton.checked = true;
    }
  }

  function filterDateDescending() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    let sortedLog = log.sort((a, b) => {
      return b.hashCode - a.hashCode;
    });

    localStorage.setItem("log", JSON.stringify(sortedLog));
  }

  function filterDateAscending() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    let sortedLog = log.sort((a, b) => {
      return a.hashCode - b.hashCode;
    });

    localStorage.setItem("log", JSON.stringify(sortedLog));
  }

  function filterPriceDescending() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    let sortedLog = log.sort((a, b) => {
      return b.amountInt - a.amountInt;
    });

    localStorage.setItem("log", JSON.stringify(sortedLog));
  }

  function filterPriceAscending() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    let sortedLog = log.sort((a, b) => {
      return a.amountInt - b.amountInt;
    });

    localStorage.setItem("log", JSON.stringify(sortedLog));
  }

  function sortDateDescending() {
    localStorage.setItem("filter", "dateDescending");
    filterDateDescending();
  }

  function sortDateAscending() {
    localStorage.setItem("filter", "dateAscending");
    filterDateAscending();
  }

  function sortPriceDescending() {
    localStorage.setItem("filter", "priceDescending");
    filterPriceDescending();
  }

  function sortPriceAscending() {
    localStorage.setItem("filter", "priceAscending");
    filterPriceAscending();
  }

  function dateWeekly() {
    sessionStorage.setItem("filter", "weekly");
    window.location.reload();
  }

  function dateMonthly() {
    sessionStorage.setItem("filter", "monthly");
    window.location.reload();
  }

  function dateAnnual() {
    sessionStorage.setItem("filter", "annual");
    window.location.reload();
  }

  function clearFilters() {
    sessionStorage.clear("filter");
    window.location.reload();
  }

  function sorting() {
    if (sessionStorage.getItem("filter") === "weekly") {
      const weeklyButton = document.getElementById("dateWeekly");

      weeklyButton.checked = true;
    }

    if (sessionStorage.getItem("filter") === "monthly") {
      const monthlyButton = document.getElementById("dateMonthly");

      monthlyButton.checked = true;
    }

    if (sessionStorage.getItem("filter") === "annual") {
      const annualButton = document.getElementById("dateAnnual");

      annualButton.checked = true;
    }
  }

  useEffect(() => {
    filters();
    sorting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="filters-modal" id="filters-modal">
      <div className="filters">
        <div className="filters-header">
          <h2>Filters</h2>
          <span
            className="material-icons filters-close-button"
            onClick={openFilters}
          >
            close
          </span>
        </div>
        <div className="filters-content">
          <h3 className="filters-heading">Sorting</h3>
          <form className="sorting-form" id="sorting-form">
            <label htmlFor="date-descending" onClick={sortDateDescending}>
              <input
                type="radio"
                value="dateDescending"
                id="date-descending"
                name="sorting"
              />
              By Date (Descending)
            </label>
            <label htmlFor="date-ascending" onClick={sortDateAscending}>
              <input
                type="radio"
                value="dateAscending"
                id="date-ascending"
                name="sorting"
              />
              By Date (Ascending)
            </label>
            <label htmlFor="price-descending" onClick={sortPriceDescending}>
              <input
                type="radio"
                value="priceDescending"
                id="price-descending"
                name="sorting"
              />
              By Price (Descending)
            </label>
            <label htmlFor="price-ascending" onClick={sortPriceAscending}>
              <input
                type="radio"
                value="priceAscending"
                id="price-ascending"
                name="sorting"
              />
              By Price (Ascending)
            </label>
          </form>
          <h3 className="filters-heading">Filters</h3>
          <form className="filters-form" id="filters-form">
            <label htmlFor="dateWeekly" onClick={dateWeekly}>
              <input
                type="radio"
                value="dateWeekly"
                id="dateWeekly"
                name="filtering"
              />
              Weekly
            </label>
            <label htmlFor="dateMonthly" onClick={dateMonthly}>
              <input
                type="radio"
                value="dateMonthly"
                id="dateMonthly"
                name="filtering"
              />
              Monthly
            </label>
            <label htmlFor="dateAnnual" onClick={dateAnnual}>
              <input
                type="radio"
                value="dateAnnual"
                id="dateAnnual"
                name="filtering"
              />
              Annually
            </label>
            <button htmlFor="dateAnnual" onClick={clearFilters}>
              Clear Filters
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
