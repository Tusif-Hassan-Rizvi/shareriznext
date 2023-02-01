import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

function Search(props) {
  const [input, setInput] = useState("");
  const [breifdata, setBreifdata] = useState([]);
  const HandleChange = (e) => {
    props.SearchValue(e.target.value);
    setInput(e.target.value);
  };

  useEffect(() => {
    let SearchAll = document.getElementById("searchData");
    // search all logic
    if (SearchAll.children[0]) {
      SearchAll.children[0].style.display = "flex";
    }
  },[input]);
  useEffect(() => {
    fetch("http://localhost:3000/api/alldata")
      .then((response) => response.json())
      .then((response) => {
        setBreifdata(response);
      });
  }, []);
  return (
    <>
      <div className={styles.searchOption}>
        <span className={styles.searchbtn}>
          <Image
            src="/search.svg"
            height={20}
            width={20}
            className={styles.searchIcon}
            alt="search"
          ></Image>
        </span>
        <input
          className={styles.inputBox}
          type="search"
          placeholder="Search stocks here"
          id="search-input"
          onChange={HandleChange}
          value={input}
        />
      </div>

      {/* search result  */}
      <div id="searchData" className={styles.SearchData}>
        {breifdata.length === 0
          ? null
          : breifdata.map(
              (item, index) =>
              input!=="" &&(item.symbol.includes(input.toUpperCase()) ? 
              <div key={index} className={styles.showdata} style={{ display: "none"}}>        
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
    </>
  );
}

export default Search;
