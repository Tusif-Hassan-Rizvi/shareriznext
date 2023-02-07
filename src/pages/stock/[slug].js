import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Stocktable from "components/Stocktable";
import styles from "@/styles/Index.module.css";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  let StockData = JSON.parse(sessionStorage.getItem("item"));

  return (
    <>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <div style={{ marginTop: "15vh" }}>
        <div className={styles.showdata}>Name:{StockData.symbol}</div>
        <div className={styles.showdata}>Open{StockData.open}</div>
        <div className={styles.showdata}>Day High{StockData.dayHigh}</div>
        <div className={styles.showdata}>Day Low{StockData.dayLow}</div>
        <div className={styles.showdata}>rupees change:{StockData.change}</div>
        <div className={styles.showdata}>Percent change{StockData.pChange}</div>

        <div className={styles.showdata}>
          PrviosDayLastPrice{StockData.previousClose}
        </div>
        <div className={styles.showdata}>
          Year High price{StockData.yearHigh}
        </div>
        <div className={styles.showdata}>Year Low price{StockData.yearLow}</div>
        <div className={styles.showdata}>
          last 30 days percent change{StockData.perChange30d}
        </div>
        <div className={styles.showdata}>
          last 360 days percent change{StockData.perChange365d}
        </div>
        <div className={styles.showdata}>
          total trade value{StockData.totalTradedValue}
        </div>
        <div className={styles.showdata}>
          total trade volume{StockData.totalTradedVolume}
        </div>
        <div className={styles.showdata}>
          last update time{StockData.lastUpdateTime}
        </div>
      </div>
    </>
  );
}

export default Slug;
