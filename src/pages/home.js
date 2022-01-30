import "../styles/home.css";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <section className="dashboard-section">
        <div className="card">
          <h4>Weekly Spending</h4>
          <h3 className="card-total">$1,302.00</h3>
          <p>spending of days from this week</p>
        </div>
        <div className="card">
          <h4>Monthly Spending</h4>
          <h3 className="card-total">$1,302.00</h3>
          <p>pie chart of biggest expenses this month</p>
        </div>
        <div className="card">
          <h4>Annual Spending</h4>
          <h3 className="card-total">$1,302.00</h3>
          <p>bar graph of months and spending</p>
        </div>
      </section>
    </main>
  );
}