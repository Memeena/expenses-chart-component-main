import React from "react";
import styles from "./ChartBar.module.css";

export default function ChartBar(props) {
  //To show the amount
  const [showAmount, setShowAmount] = React.useState(false);
  //Background color for each day of the Chart
  const [bgHover, setBgHover] = React.useState("hsl(10, 79%, 65%)");
  const [bgMaxHover, setBgMaxHover] = React.useState("hsl(186, 34%, 60%)");

  //To determine the height of each bar based on the maximum amount, dynamically from the data.json file
  let barFillHeight =
    props.maxValue > 0
      ? Math.round((props.amount / props.maxValue) * 100) + "px"
      : "0%";

  //Dynamic styling for background color of each bar
  const dynamicStyle = {
    backgroundColor: props.amount === props.maxValue ? bgMaxHover : bgHover,
  };

  //To handle display of amount and changing the background colour on Hover

  function handleMouseOver() {
    setShowAmount(true);

    props.amount === props.maxValue
      ? setBgMaxHover("hsla(186, 34%, 60%,0.5)")
      : setBgHover("hsla(10, 79%, 65%,0.5)");
  }

  //To handle display of amount and changing the background colour on Hover exit

  function handleMouseOut() {
    setShowAmount(false);

    props.amount === props.maxValue
      ? setBgMaxHover("hsl(186, 34%, 60%)")
      : setBgHover("hsl(10, 79%, 65%)");
  }

  return (
    <div className={styles.barChart}>
      {showAmount && <div className={styles.amount}>{"$" + props.amount}</div>}

      <div className={styles.inner} style={{ height: barFillHeight }}>
        <div
          className={styles.fill}
          onMouseOver={handleMouseOver}
          style={dynamicStyle}
          onMouseOut={handleMouseOut}
        ></div>
      </div>

      <div className={styles.label}>{props.day}</div>
    </div>
  );
}
