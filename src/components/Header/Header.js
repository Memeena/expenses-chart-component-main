import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.balance}>
        <h4 className={styles.balanceHeading}>My balance</h4>
        <p className={styles.balanceAmount}>$921.48</p>
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
}
