import React from "react";
import styles from "./Chart.module.css";
import expenseData from "../../data.json";
import ChartBar from "./ChartBar/ChartBar";
import TotalDetails from "./TotalDetails/TotalDetails";

export default function Chart() {
  const dataPointsValues = expenseData.map((data) => data.amount);
  const maximumValue = Math.max(...dataPointsValues);

  return (
    <div className={styles.chart}>
      <h1 className={styles.chartHeading}>Spending - Last 7 days</h1>
      <section className={styles.chartBar}>
        {expenseData.map((data) => (
          <ChartBar
            key={data.day}
            day={data.day}
            amount={data.amount}
            maxValue={maximumValue}
          />
        ))}
      </section>
      <TotalDetails />
    </div>
  );
}
