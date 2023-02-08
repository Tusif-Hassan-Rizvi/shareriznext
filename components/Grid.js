import React from 'react'
import styles from "@/styles/grid.module.css";

export default function Grid(props) {
  return (
    <div className={styles.gridcontainer}>
        <div className={styles.griditem}>Name:{props.StockData.symbol}</div>
        <div className={styles.griditem}>Indenfier:{props.StockData.identifier}</div>
        <div className={styles.griditem}>Open{props.StockData.open}</div>
        <div className={styles.griditem}>Day High{props.StockData.dayHigh}</div>
        <div className={styles.griditem}>Day Low{props.StockData.dayLow}</div>
        <div className={styles.griditem}>rupees change:{props.StockData.change}</div>
        <div className={styles.griditem}>Percent change{props.StockData.pChange}</div>

        <div className={styles.griditem}>
          PrviosDayLastPrice{props.StockData.previousClose}
        </div>
        <div className={styles.griditem}>
          Year High price{props.StockData.yearHigh}
        </div>
        <div className={styles.griditem}>Year Low price{props.StockData.yearLow}</div>
        <div className={styles.griditem}>
          last 30 days percent change{props.StockData.perChange30d}
        </div>
        <div className={styles.griditem}>
          last 360 days percent change{props.StockData.perChange365d}
        </div>
        <div className={styles.griditem}>
          total trade value{props.StockData.totalTradedValue}
        </div>
        <div className={styles.griditem}>
          total trade volume{props.StockData.totalTradedVolume}
        </div>
        <div className={styles.griditem}>
          last update time{props.StockData.lastUpdateTime}
        </div>
      </div>
  )
}
