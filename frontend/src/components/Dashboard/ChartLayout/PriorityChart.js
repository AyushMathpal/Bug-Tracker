// PriorityChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import styles from "../Dashboard.module.css";

const PriorityChart = ({ data }) => {
  return (
    <div  className={styles.graph_item}>
      <Bar data={data} options={{ scales: { y: { beginAtZero: true } } }} />
    </div>
  );
};

export default PriorityChart;
