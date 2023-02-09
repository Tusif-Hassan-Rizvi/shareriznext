import React from "react";
import styles from "@/styles/grid.module.css";

export default function Grid(props) {
  return (
    <>
    <div className={styles.gridcontainer}>
      <div className={styles.griditem}>
        <div>Name</div>
        <span>{props.StockData.symbol}</span>
      </div>
      <div className={styles.griditem}>
        <div>Open</div>
        <span>{props.StockData.open}</span>
      </div>
      <div className={styles.griditem}>
        <div>Day High</div>
        <span>{props.StockData.dayHigh}</span>
      </div>
      <div className={styles.griditem}>
        <div>Day Low</div>
        <span>{props.StockData.dayLow}</span>
      </div>
      <div className={styles.griditem}>
        <div>Change</div>
        <span style={props.StockData.change >= 0 ? { color: "green" } : { color: "red" }}>{props.StockData.change.toFixed(2)}₹</span>
      </div>
      <div className={styles.griditem}>
        <div>Change</div>
        <span style={props.StockData.pChange >= 0 ? { color: "green" } : { color: "red" }}>{props.StockData.pChange.toFixed(2)}%</span>
      </div>

      <div className={styles.griditem}>
        <div>Previous Close</div>
        <span>{props.StockData.previousClose}</span>
      </div>
      <div className={styles.griditem}>
        <div>Year High</div>
        <span>{props.StockData.yearHigh}</span>
      </div>
      <div className={styles.griditem}>
        <div>Year Low</div>
        <span>{props.StockData.yearLow}</span>
      </div>
      <div className={styles.griditem}>
        <div>Last 30 Days</div>
        <span style={props.StockData.perChange30d >= 0 ? { color: "green" } : { color: "red" }}>{props.StockData.perChange30d.toFixed(2)}%</span>
      </div>
      <div className={styles.griditem}>
        <div>Last 360 Days</div>
        <span style={props.StockData.perChange365d >= 0 ? { color: "green" } : { color: "red" }}>{props.StockData.perChange365d.toFixed(2)}%</span>
      </div>
      <div className={styles.griditem}>
        <div>Total Trade Value</div>
        <span>₹{props.StockData.totalTradedValue.toFixed(2)}</span>
      </div>
      <div className={styles.griditem}>
        <div>Total Trade Volume</div>
        <span>{props.StockData.totalTradedVolume}</span>
      </div>
    </div>
    </>
  );
}
