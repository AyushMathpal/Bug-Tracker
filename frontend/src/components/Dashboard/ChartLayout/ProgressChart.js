// ProgressChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../Dashboard.module.css";

const ProgressChart = ({ data }) => {
  return (
    <div className={`${styles.graph_item} ${styles.progress}`}>
      <Bar data={data} options={{ scales: { y: { beginAtZero: true } } }} />
    </div>
  );
};

export default ProgressChart;
