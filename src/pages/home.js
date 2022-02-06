import Chart from "../components/Chart";
import "../styles/home.css";

export default function Home() {
  return (
    <main>
      <h2 className="dashboard-heading">Dashboard</h2>
      <section className="dashboard-section">
        <div className="card">
          <h4>Weekly Spending</h4>
          <div>
            <h3 className="card-total">$1,302.00</h3>
            <small>
              <span className="material-icons">expand_less</span>
              84% (Previously: $1093.68)
            </small>
          </div>
          <Chart type="week" />
          <a href="/log" className="link">
            View log →
          </a>
        </div>
        <div className="card">
          <h4>Monthly Spending</h4>
          <div>
            <h3 className="card-total">$1,302.00</h3>
            <small>
              <span className="material-icons">expand_less</span>
              84% (Previously: $1093.68)
            </small>
          </div>
          <Chart type="month" />
          <a href="/log" className="link">
            View log →
          </a>
        </div>
        <div className="card">
          <h4>Annual Spending</h4>
          <div>
            <h3 className="card-total">$1,302.00</h3>
            <small>
              <span className="material-icons">expand_less</span>
              84% (Previously: $1093.68)
            </small>
          </div>
          <Chart type="year" />
          <a href="/log" className="link">
            View log →
          </a>
        </div>
      </section>
    </main>
  );
}
