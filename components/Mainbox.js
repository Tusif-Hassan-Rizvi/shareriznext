import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Loadder from "./Loadder";
import Customselect from "./Customselect";

function Mainbox(props) {
  const [indices, setIndices] = useState("");
  const [listinput, setListinput] = useState("");
  const IndexArray=["NIFTY 50", "NIFTY IT", "NIFTY BANK", "NIFTY ENERGY", "NIFTY PHARMA", "NIFTY INFRA", "NIFTY METAL", "NIFTY PHARMA", "NIFTY PSU BANK", "NIFTY PVT BANK", "NIFTY FIN SERVICE", "NIFTY MEDIA"];

  const OnclickIndices = (e) => {
    setIndices(e.target.innerText);

    // sending stock list data to index js using state lifting
    props.Indices(e.target.innerText);
  };

  // implementing search prefrence
  useEffect(() => {
    let showinfo = document.getElementById("ShowInfo");
    let ParaDisplay = document.getElementById("para");
    let value = listinput;
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
    ParaDisplay.innerHTML = noResults ? `"${listinput}" Not found!` : "";
    if (noResults) {
      showinfo.style.display = "none";
    } else {
      showinfo.style.display = "flex";
    }
  }, [listinput]);

  useEffect(() => {
    let paraDisplay = document.getElementById("para");
    paraDisplay.style.display = "none";
  }, [indices]);

  // listinput HandleChange
  const HandleChange = (e) => {
    setListinput(e.target.value);
  };

  //select indices logic
  const handleSelectChange = (value) => {
    console.log(value);
    setIndices(value)
    props.Indices(value)
  };

  return (
    <>
      <div className={styles.heading}>TODAY INSIGHTS</div>

      {/* stock list */}
      <Customselect
        options={IndexArray}
        onChange={handleSelectChange}
      />
      <div id="menue" className={styles.menue}>
        <span id="nifty" className={styles.niftylink} onClick={OnclickIndices}>
          NIFTY 50
        </span>
        <span
          id="nifty-next"
          className={styles.niftylink}
          onClick={OnclickIndices}
        >
          NIFTY IT
        </span>
        <input
          type="search"
          placeholder="Search stocks here"
          onChange={HandleChange}
          value={listinput}
        ></input>
      </div>

      {/* stocks data  */}
      <div id="container" className={styles.container}>
        <p id="para" className={styles.para}></p>
        <div
          id="ShowInfo"
          style={props.loading ? { boxShadow: "none" } : {}}
          className={styles.showdataBox}
        >
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
                        {item.change >= 0 ? "+" : ""}
                        {item.change.toFixed(2)}
                      </span>
                    </span>
                    <span className={styles.pChange} id="pc">
                      <div className={styles.infotext}>PROFIT/LOSS</div>
                      {
                        <span
                          style={
                            item.pChange >= 0
                              ? { color: "green" }
                              : { color: "red" }
                          }
                        >
                          {item.pChange >= 0 ? "+" : ""}
                          {item.pChange.toFixed(2)}%
                        </span>
                      }
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
