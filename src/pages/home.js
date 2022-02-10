import Chart from "../components/Chart";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h2 className="dashboard-heading">Dashboard</h2>
      <h3 className="dashboard-heading">Insights</h3>
      <section className="dashboard-section">
        <div className="card">
          <h4>Weekly Spending</h4>
          <div>
            <h3 className="card-total">—</h3>
            <small>
              <span className="material-icons">arrow_drop_up</span>
              0% (Previously: — )
            </small>
          </div>
          <Chart type="week" />
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
          <Chart type="month" />
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
          <Chart type="year" />
          <Link to="/log" className="link">
            View log →
          </Link>
        </div>
      </section>
    </main>
  );
}
