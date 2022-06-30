import React from "react";
import styles from "./TotalDetails.module.css";

export default function TotalDetails() {
  return (
    <div className={styles.details}>
      <p className={styles.para}>Total this month</p>
      <div className={styles.amt}>
        <p className={`${styles.totalAmt} ${styles.amtColor}`}>$478.33</p>
        <div className={styles.perc}>
          <p className={`${styles.amtColor} ${styles.totalPerc}`}>+2.4%</p>
          <p className={styles.para}>from last month</p>
        </div>
      </div>
    </div>
  );
}
