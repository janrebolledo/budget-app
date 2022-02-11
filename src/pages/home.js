// import Chart from "../components/Chart";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  function weeklyInsight() {
    let weeklyTotal = 0;
    const weeklyTotalH3 = document.getElementById("weekly-total");

    if (weeklyTotal > 0) {
      weeklyTotalH3.innerHTML = "$" + weeklyTotal;
    } else {
      weeklyTotalH3.innerHTML = "—";
    }
  }

  useEffect(() => {
    weeklyInsight();
  });

  let log = JSON.parse(localStorage.getItem("log"));

  if (log === null) {
    return (
      <main>
        <h2 className="dashboard-heading">Dashboard</h2>
        <h3 className="dashboard-heading">Insights</h3>
        <div className="dashboard-message">
          <h3>
            Add items in the{" "}
            <Link to="/log" className="link">
              log
            </Link>{" "}
            to get started!
          </h3>
        </div>
        <section className="dashboard-section greyed-out">
          <div className="card">
            <h4>Weekly Spending</h4>
            <div>
              <h3 className="card-total" id="weekly-total">
                —
              </h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="week" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
          <div className="card">
            <h4>Monthly Spending</h4>
            <div>
              <h3 className="card-total">—</h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="month" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
          <div className="card">
            <h4>Annual Spending</h4>
            <div>
              <h3 className="card-total">—</h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="year" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
        </section>
      </main>
    );
  }
  if (log !== null) {
    return (
      <main>
        <h2 className="dashboard-heading">Dashboard</h2>
        <h3 className="dashboard-heading">Insights</h3>
        <section className="dashboard-section">
          <div className="card">
            <h4>Weekly Spending</h4>
            <div>
              <h3 className="card-total" id="weekly-total">
                —
              </h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="week" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
          <div className="card">
            <h4>Monthly Spending</h4>
            <div>
              <h3 className="card-total">—</h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="month" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
          <div className="card">
            <h4>Annual Spending</h4>
            <div>
              <h3 className="card-total">—</h3>
              <small>
                <span className="material-icons">arrow_drop_up</span>
                0% (Previously: — )
              </small>
            </div>
            {/* <Chart type="year" /> */}
            <Link to="/log" className="link">
              View log →
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
