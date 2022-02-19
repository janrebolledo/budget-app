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
    var yearNum = LocalDate.now().year();

    // Filters the list by if week number is the same
    var weeklyLog = log.filter((item) => {
      return item.week === weekNum;
    });

    // Makes sure that the year is the same
    weeklyLog = weeklyLog.filter((item) => {
      return item.year === yearNum;
    });

    // Get amounts in an array as integers
    let result = weeklyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let total = 0;

    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }

    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const prevWeekTotal = document.getElementById("prev-week-total");

    // Gets number of previous week in year

    if (weekNum === 1) {
      var prevWeekNum = 52;
      var prevYearNum = yearNum - 1;
    } else {
      // eslint-disable-next-line
      var prevWeekNum = LocalDate.now().isoWeekOfWeekyear() - 1;
      // eslint-disable-next-line
      var prevYearNum = LocalDate.now().year();
    }

    // Filters the list by if week number is the same

    var prevWeeklyLog = log.filter((item) => {
      return item.week === prevWeekNum;
    });

    // Makes sure that the year is the same
    prevWeeklyLog = prevWeeklyLog.filter((item) => {
      return item.year === prevYearNum;
    });

    // Get amounts in an array as integers
    let prevResult = prevWeeklyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let prevTotal = 0;

    for (let i = 0; i < prevResult.length; i++) {
      prevTotal += prevResult[i];
    }

    const prevFormattedTotal = prevTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const percentage = Number(((total / prevTotal) * 100).toFixed(2));

    const weeklyPercentageSpan = document.getElementById(
      "weekly-insight-percentage"
    );
    const weeklyPercentageIndicatorSpan = document.getElementById(
      "weekly-percentage-indicator"
    );

    if (total > 0) {
      weeklyTotalH3.innerHTML = formattedTotal;
      prevWeekTotal.innerHTML = prevFormattedTotal;
      weeklyPercentageSpan.innerHTML = percentage;
      if (percentage > 100) {
        weeklyPercentageIndicatorSpan.innerHTML = "arrow_drop_up";
      } else {
        weeklyPercentageIndicatorSpan.innerHTML = "arrow_drop_down";
      }
    }
  }

  function monthlyInsight() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    const monthlyTotalH3 = document.getElementById("monthly-total");

    // Gets number of week in year
    var monthNum = LocalDate.now().monthValue();
    var yearNum = LocalDate.now().year();

    // Filters the list by if week number is the same
    var monthlyLog = log.filter((item) => {
      return item.month === monthNum;
    });

    // Makes sure that the year is the same
    monthlyLog = monthlyLog.filter((item) => {
      return item.year === yearNum;
    });

    // Get amounts in an array as integers
    let result = monthlyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let total = 0;

    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }

    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const prevMonthTotal = document.getElementById("prev-month-total");

    // Gets number of previous month in year

    if (monthNum === 1) {
      var prevMonthNum = 12;
      var prevYearNum = yearNum - 1;
    } else {
      // eslint-disable-next-line
      var prevMonthNum = LocalDate.now().monthValue() - 1;
      // eslint-disable-next-line
      var prevYearNum = LocalDate.now().year();
    }

    // Filters the list by if month number is the same

    var prevMonthlyLog = log.filter((item) => {
      return item.month === prevMonthNum;
    });

    // Makes sure that the year is the same
    prevMonthlyLog = prevMonthlyLog.filter((item) => {
      return item.year === prevYearNum;
    });

    // Get amounts in an array as integers
    let prevResult = prevMonthlyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let prevTotal = 0;

    for (let i = 0; i < prevResult.length; i++) {
      prevTotal += prevResult[i];
    }

    const prevFormattedTotal = prevTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const percentage = Number(((total / prevTotal) * 100).toFixed(2));

    const monthlyPercentageSpan = document.getElementById(
      "monthly-insight-percentage"
    );
    const monthlyPercentageIndicatorSpan = document.getElementById(
      "monthly-percentage-indicator"
    );

    if (total > 0) {
      monthlyTotalH3.innerHTML = formattedTotal;
      prevMonthTotal.innerHTML = prevFormattedTotal;
      monthlyPercentageSpan.innerHTML = percentage;
      if (percentage > 100) {
        monthlyPercentageIndicatorSpan.innerHTML = "arrow_drop_up";
      } else {
        monthlyPercentageIndicatorSpan.innerHTML = "arrow_drop_down";
      }
    }
  }

  function yearlyInsight() {
    const log = JSON.parse(localStorage.getItem("log") || "[]");

    const yearlyTotalH3 = document.getElementById("yearly-total");

    // Gets number of week in year
    var yearNum = LocalDate.now().year();

    // Makes sure that the year is the same
    var yearlyLog = log.filter((item) => {
      return item.year === yearNum;
    });

    // Get amounts in an array as integers
    let result = yearlyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let total = 0;

    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }

    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const prevYearTotal = document.getElementById("prev-year-total");

    // Gets number of previous week in year
    var prevYearNum = yearNum - 1;

    // Makes sure that the year is the same
    var prevYearlyLog = log.filter((item) => {
      return item.year === prevYearNum;
    });

    // Get amounts in an array as integers
    let prevResult = prevYearlyLog.map(({ amountInt }) => amountInt);

    // Add amounts together
    let prevTotal = 0;

    for (let i = 0; i < prevResult.length; i++) {
      prevTotal += prevResult[i];
    }

    const prevFormattedTotal = prevTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const percentage = Number(((total / prevTotal) * 100).toFixed(2));

    const yearlyPercentageSpan = document.getElementById(
      "yearly-insight-percentage"
    );
    const yearlyPercentageIndicatorSpan = document.getElementById(
      "yearly-percentage-indicator"
    );

    if (total > 0) {
      yearlyTotalH3.innerHTML = formattedTotal;
      prevYearTotal.innerHTML = prevFormattedTotal;
      yearlyPercentageSpan.innerHTML = percentage;
      if (percentage > 100) {
        yearlyPercentageIndicatorSpan.innerHTML = "arrow_drop_up";
      } else {
        yearlyPercentageIndicatorSpan.innerHTML = "arrow_drop_down";
      }
    }
  }

  useEffect(() => {
    weeklyInsight();
    monthlyInsight();
    yearlyInsight();
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
                <span
                  className="material-icons"
                  id="weekly-percentage-indicator"
                >
                  arrow_drop_up
                </span>
                <span id="weekly-insight-percentage">0</span>% (Previously:{" "}
                <span id="prev-week-total">—</span> )
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
              <h3 className="card-total" id="monthly-total">
                —
              </h3>
              <small>
                <span
                  className="material-icons"
                  id="monthly-percentage-indicator"
                >
                  arrow_drop_up
                </span>
                <span id="monthly-insight-percentage">0</span>% (Previously:{" "}
                <span id="prev-month-total">—</span> )
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
              <h3 className="card-total" id="yearly-total">
                —
              </h3>
              <small>
                <span
                  className="material-icons"
                  id="yearly-percentage-indicator"
                >
                  arrow_drop_up
                </span>
                <span id="yearly-insight-percentage">0</span>% (Previously:{" "}
                <span id="prev-year-total">—</span> )
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
