import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Loadder from "./Loadder";

function Mainbox(props) {
  const [indices, setIndices] = useState("");
  const [breifdata, setBreifdata] = useState([]);

  const OnclickIndices = (e) => {
    setIndices(e.target.innerText);

    // sending stock list data to index js using state lifting
    props.Indices(e.target.innerText);
  };

  // implementing search prefrence
  useEffect(() => {
    let showinfo = document.getElementById("ShowInfo");
    let ParaDisplay = document.getElementById("para");
    let SearchAll = document.getElementById("searchData");
    let value = props.searchvalue;
    value = value.toUpperCase();
    let noResults = true;
    for (let i = 0; i < showinfo.children[0].children.length; i++) {
      let child = showinfo.children[0].children[i];

      if (child.innerText.includes(value)) {
        noResults = false;
        child.style.display = "flex";
      } else {
        child.style.display = "none";
      }
    }
    noResults
      ? (ParaDisplay.style.display = "block")
      : (ParaDisplay.style.display = "none");
    ParaDisplay.innerHTML = noResults ? "Not found!" : "";

// search all logic 
if(SearchAll.children[0]){
  console.log(SearchAll.children[0])
  SearchAll.children[0].style.display="flex"
}
  }, [props.searchvalue]);

  useEffect(() => {
    let paraDisplay = document.getElementById("para");
    paraDisplay.style.display = "none";
  }, [indices]);

  useEffect(() => {
    fetch("http://localhost:3000/api/alldata")
      .then((response) => response.json())
      .then((response) => {
        setBreifdata(response);
      });
    console.log("call");
  }, []);

  return (
    <>
      <div id="searchData">
        {breifdata.length === 0
          ? null
          : breifdata.map(
              (item, index) =>
              props.searchvalue!=="" &&(item.symbol.includes(props.searchvalue.toUpperCase()) ? 
              <div key={index} className={styles.showdata} style={{ display: "none", boxShadow:"none", border:"none", alignItems:"center", justifyContent:"center" }}>        
                    <span className={styles.symbol}>
                      <div className={styles.infotext}>COMPANY NAME</div>
                      {item.symbol}
                    </span>
                    <span className={styles.open} id="open">
                      <div className={styles.infotext}>OPEN</div>
                      {item.open}
                    </span>
                    <span className={styles.dayHigh}>
                      <div className={styles.infotext}>DAY HIGH</div>
                      {item.dayHigh}
                    </span>
                    <span className={styles.dayLow}>
                      <div className={styles.infotext}>DAY LOW</div>
                      {item.dayLow}
                    </span>
                    <span className={styles.lastPrice} id="lastPrice">
                      <div className={styles.infotext}>LAST PRICE</div>
                      {item.lastPrice}
                    </span>
                    <span className={styles.change}>
                      <div className={styles.infotext}>PRICE CHANGE</div>
                      <span
                        id="pricechange"
                        style={
                          item.change >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.change.toFixed(2)}
                      </span>
                    </span>
                    <span className={styles.pChange} id="pc">
                      <div className={styles.infotext}>PROFIT/LOSS</div>
                      <span
                        style={
                          item.pChange >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.pChange.toFixed(2)}%
                      </span>
                    </span>
              </div> : null
            ))}
      </div>
      <div className={styles.heading}>TODAY INSIGHTS</div>

      {/* stock list */}
      <div id="menue" className={styles.menue}>
        <span id="nifty" className={styles.niftylink} onClick={OnclickIndices}>
          NIFTY 50
        </span>
        <span
          id="nifty-next"
          className={styles.niftylink}
          onClick={OnclickIndices}
        >
          NIFTY NEXT 50
        </span>
        <span
          id="nifty-100"
          className={styles.niftylink}
          onClick={OnclickIndices}
        >
          NIFTY 100
        </span>
        <span
          id="nifty-200"
          className={styles.niftylink}
          onClick={OnclickIndices}
        >
          NIFTY 200
        </span>
        {/* <!-- <span id="nifty-all" className="niftylink">NIFTY ALL STOCK</span> --> */}
      </div>

      {/* stocks data  */}
      <div id="container" className={styles.container}>
        <p id="para" className={styles.para}></p>
        <div id="ShowInfo" className={styles.showdataBox}>
          {props.loading ? (
            <Loadder />
          ) : (
            <div>
              {props.stockdata.length === 0 ? (
                <h2>Data not found!</h2>
              ) : (
                props.stockdata.map((item, index) => (
                  <div className={styles.showdata} id="show-data" key={index}>
                    <span className={styles.symbol}>
                      <div className={styles.infotext}>COMPANY NAME</div>
                      {item.symbol}
                    </span>
                    <span className={styles.open} id="open">
                      <div className={styles.infotext}>OPEN</div>
                      {item.open}
                    </span>
                    <span className={styles.dayHigh}>
                      <div className={styles.infotext}>DAY HIGH</div>
                      {item.dayHigh}
                    </span>
                    <span className={styles.dayLow}>
                      <div className={styles.infotext}>DAY LOW</div>
                      {item.dayLow}
                    </span>
                    <span className={styles.lastPrice} id="lastPrice">
                      <div className={styles.infotext}>LAST PRICE</div>
                      {item.lastPrice}
                    </span>
                    <span className={styles.change}>
                      <div className={styles.infotext}>PRICE CHANGE</div>
                      <span
                        id="pricechange"
                        style={
                          item.change >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.change.toFixed(2)}
                      </span>
                    </span>
                    <span className={styles.pChange} id="pc">
                      <div className={styles.infotext}>PROFIT/LOSS</div>
                      <span
                        style={
                          item.pChange >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.pChange.toFixed(2)}%
                      </span>
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mainbox;
