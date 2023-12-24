// TypeChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from "../Dashboard.module.css"
const TypeChart = ({ data }) => {
  return (
    <div  className={styles.graph_item}>
      <Pie data={data} />
    </div>
  );
};

export default TypeChart;
