// import Chart from "../components/Chart";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LocalDate } from "@js-joda/core";

export default function Home() {
  function weeklyInsight() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    const weeklyTotalH3 = document.getElementById("weekly-total");

    // Gets number of week in year
    var weekNum = LocalDate.now().isoWeekOfWeekyear();

    // Filters the list by if week number is the same
    var weeklyLog = log.filter((item) => {
      return item.week === weekNum;
    });

    // Get amounts in an array as integers
    let result = weeklyLog.map(({ amount }) =>
      Number(amount.replace("$", "").replace(/,/g, ""))
    );

    // Add amounts together
    let total = 0;

    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }

    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    if (total > 0) {
      weeklyTotalH3.innerHTML = formattedTotal;
    } else {
      weeklyTotalH3.innerHTML = "—";
    }
  }

  useEffect(() => {
    weeklyInsight();
  });

  let log = JSON.parse(localStorage.getItem("log"));

  // If no log items found, load a grayed out dashboard and an onboarding message
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

  // If log items are found, load regular dashboard
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
