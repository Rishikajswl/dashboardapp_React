// DashboardMetrics.js
import React from 'react';
import './DashboardMetrics.css';

const DashboardMetrics = () => {
  return (
    <header>
      <h2>Dashboard Task</h2>
      <div className="dashboard-metrics">
        <div className="metric">
          <h4>Loram Iporam</h4>
          <p>5</p>
        </div>
        <div className="metric">
          <h4>Loram Iporam</h4>
          <p>3</p>
        </div>
        <div className="metric">
          <h4>Loram Iporam</h4>
          <p>8 / 50</p>
        </div>
        <div className="metric">
          <h4>Loram Iporam</h4>
          <p>2</p>
        </div>
      </div>
    </header>
  );
}

export default DashboardMetrics;