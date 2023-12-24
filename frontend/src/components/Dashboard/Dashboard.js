// Dashboard.js
import React from "react";
import PriorityChart from "./ChartLayout/PriorityChart";
import TypeChart from "./ChartLayout/TypeChart";
import ProgressChart from "./ChartLayout/ProgressChart";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  // Replace with your actual data
  const priorityData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Priority Distribution",
        data: [15, 30, 10],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const typeData = {
    labels: ["Bug", "Feature Request", "Error"],
    datasets: [
      {
        data: [25, 15, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const progressData = {
    labels: [
      "New",
      "Open",
      "In Progress",
      "Closed",
      "Additional Information Required",
    ],
    datasets: [
      {
        label: "Progress Status",
        data: [20, 15, 10, 35, 5],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF9800",
        ],
      },
    ],
  };

  return (
    <div className="styles.dashboard">
      <div className={styles.graph_component}>
        <div className={styles.first_row}>
          <PriorityChart data={priorityData} className={styles.graph_item} />
          <TypeChart data={typeData} className={styles.graph_item} />
        </div>
        <div className={styles.second_row}>
        <ProgressChart data={progressData} className={styles.graph_item} /></div>
      </div>
    </div>
  );
};

export default Dashboard;
