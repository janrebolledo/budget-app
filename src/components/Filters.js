import "../styles/Filters.css";

export default function Filters() {
  function openFilters() {
    const filtersModal = document.querySelector("#filters-modal");
    if (filtersModal.classList.contains("filters-modal-open")) {
      filtersModal.classList.remove("filters-modal-open");
    } else {
      filtersModal.classList.add("filters-modal-open");
    }
  }

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
          <form className="sorting-form">
            <label htmlFor="date-descending">
              <input
                type="radio"
                value="date-descending"
                id="date-descending"
                name="sorting"
              />
              By Date (Descending)
            </label>
            <label htmlFor="date-ascending">
              <input
                type="radio"
                value="date-ascending"
                id="date-ascending"
                name="sorting"
              />
              By Date (Ascending)
            </label>
            <label htmlFor="price-descending">
              <input
                type="radio"
                value="price-descending"
                id="price-descending"
                name="sorting"
              />
              By Price (Descending)
            </label>
            <label htmlFor="price-ascending">
              <input
                type="radio"
                value="price-ascending"
                id="price-ascending"
                name="sorting"
              />
              By Price (Ascending)
            </label>
          </form>
          <h3 className="filters-heading">Filters</h3>
          <p>Filters coming soon.</p>
        </div>
      </div>
    </div>
  );
}
