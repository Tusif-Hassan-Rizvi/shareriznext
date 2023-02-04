import React from "react";
import styles from "@/styles/Index.module.css";

export default function Stocktable(props) {
  return (
    <>
    <div className={styles.showdata}>
      <div
        className={styles.stockDetail}
        style={{ color: "rgba(75, 85, 99, 0.952)" }}
      >
        {props.item.symbol}
      </div>
      <div className={styles.stockDetail} id="lastPrice">
        ₹{props.item.lastPrice}
      </div>
      <div className={styles.stockDetail}>
        <div
          id="pricechange"
          style={props.item.change >= 0 ? { color: "green" } : { color: "red" }}
        >
          {props.item.change >= 0 ? "+" : ""}
          {props.item.change.toFixed(2)} ₹
        </div>
      </div>
      <div className={styles.stockDetail} id="pc">
        <div style={props.item.pChange >= 0 ? { color: "green" } : { color: "red" }}>
          {props.item.pChange >= 0 ? "+" : ""}
          {props.item.pChange.toFixed(2)}%
        </div>
      </div>
      </div>
    </>
  );
}
