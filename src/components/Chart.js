import "../styles/Chart.css";

export default function Chart(props) {
  if (props.type === "week") {
    return (
      <div className="chart-container week">
        <div className="chart-graph">
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
        </div>
        <div className="chart-unit">
          <p>Sunday</p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
      </div>
    );
  }
  if (props.type === "month") {
    return (
      <div className="chart-container month">
        <div className="chart-graph">
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
        </div>
        <div className="chart-unit">
          <p>Week 1</p>
          <p>Week 2</p>
          <p>Week 3</p>
          <p>Week 4</p>
        </div>
      </div>
    );
  }
  if (props.type === "year") {
    return (
      <div className="chart-container year">
        <div className="chart-graph">
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
          <div className="chart-bar">
            <div className="chart-percentage" />
          </div>
        </div>
        <div className="chart-unit">
          <p>January</p>
          <p>Feburary</p>
          <p>March</p>
          <p>April</p>
          <p>May</p>
          <p>June</p>
          <p>July</p>
          <p>August</p>
          <p>September</p>
          <p>October</p>
          <p>November</p>
          <p>December</p>
        </div>
      </div>
    );
  }
}
